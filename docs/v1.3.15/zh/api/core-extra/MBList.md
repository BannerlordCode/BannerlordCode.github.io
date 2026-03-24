# MBList / 列表

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBList.cs`
**Purpose**: Bannerlord自定义列表实现 / Bannerlord custom list implementation

## 概述 / Overview

`MBList` 是Bannerlord自定义的泛型列表类，是标准List的封装。

`MBList` is Bannerlord's custom generic list class, a wrapper around the standard List.

## 方法 / Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Add | `void Add(T item)` | 添加元素 / Add element |
| Remove | `bool Remove(T item)` | 移除元素 / Remove element |
| Clear | `void Clear()` | 清空列表 / Clear list |
| Count | `int Count` | 元素数量 / Element count |

## 代码示例 / Code Example

```csharp
MBList<ItemObject> items = new MBList<ItemObject>();
items.Add(item);
int count = items.Count;
```
