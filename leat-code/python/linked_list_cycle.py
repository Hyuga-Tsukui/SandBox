# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        
        if not head:
            return False
        
        slow_pointer = head
        fist_pointer = head.next
        
        while slow_pointer and fist_pointer and slow_pointer.next:
            if slow_pointer == fist_pointer:
                return True
            slow_pointer = slow_pointer.next 
            tmp = fist_pointer.next
            if tmp:
                fist_pointer = tmp.next
    
        return False

    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        if not head:
            return
        
        pointer = head
        
        appearance_list = [pointer]
        
        while pointer and pointer.next:
            pointer = pointer.next
            if pointer in appearance_list:
                return pointer
            else:
                appearance_list.append(pointer)
        return

if __name__ == '__main__':
    obj = Solution()

    node = ListNode(3)
    start = ListNode(2)
    node.next = start
    node.next.next = ListNode(0)
    node.next.next.next = ListNode(-4)
    node.next.next.next.next =start

    print(obj.detectCycle(node))