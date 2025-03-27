import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortSelectors = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortSelectors.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortSelectors.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.label}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
