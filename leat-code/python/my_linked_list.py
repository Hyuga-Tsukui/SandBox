from __future__ import annotations
from typing import List, Optional, Union


class Node:

    def __init__(self, val: int):
        self.__val = val
        self.__next: Optional[Node] = None

    def set_next(self, next: Union[Node, None]):
        self.__next = next
    
    def next(self) -> Optional[Node]:
        return self.__next
    
    def val(self) -> int:
        return self.__val

    def has_next(self) -> bool:
        return self.__next is not None

class MyLinkedList:

    def __init__(self):
        self.__head: Optional[Node] = None

    def get(self, index: int) -> int:

        if not self.__head:
            return -1
        
        current_node = self.__head
        for i in range(index):
            if not current_node:
                return -1
            current_node = current_node.next()

        return current_node.val() if current_node else -1

    def addAtHead(self, val: int) -> None:
        
        if not self.__head:
            self.__head = Node(val=val)
            return
        
        new_head = Node(val=val)
        new_head.set_next(self.__head)
        self.__head = new_head

    def addAtTail(self, val: int) -> None:
        
        if not self.__head:
            self.__head = Node(val=val)
            return
        
        new_tail = Node(val=val)
        current_node = self.__head


        while current_node and current_node.has_next():
            current_node = current_node.next()

        if current_node:
            current_node.set_next(new_tail)

    def addAtIndex(self, index: int, val: int) -> None:
        
        if index == 0:
            self.addAtHead(val=val)
            return
        
        prev_node = None
        current_node = self.__head
        for i in range(index):
            if not current_node:
                return
            prev_node = current_node
            current_node = current_node.next()
        
        new_node = Node(val=val)
        if prev_node:
            prev_node.set_next(new_node)
        
        if current_node:
            new_node.set_next(current_node)

    def deleteAtIndex(self, index: int) -> None:
        
        if not self.__head:
            return
        
        prev_node = None
        current_node = self.__head
        for i in range(index):
            if not current_node:
                return
            prev_node = current_node
            current_node = current_node.next()

        if not prev_node:
            if self.__head.has_next():
                self.__head = self.__head.next()
                return
            self.__head = None
            return
        
        if current_node:
            next_node = current_node.next()
            prev_node.set_next(next_node)

    def __repr__(self) -> str:
        node_values: List[str] = []

        if not self.__head:
            return ''

        current_node = self.__head

        node_values.append(str(current_node.val()))
        while current_node and current_node.has_next():
            current_node = current_node.next()
            node_values.append(str(current_node.val()))

        return '->'.join(node_values)