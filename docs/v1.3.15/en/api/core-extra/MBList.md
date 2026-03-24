# MBList / List

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBList.cs`
**Purpose**: Bannerlord custom list implementation

## Overview

`MBList` is Bannerlord's custom generic list class, a wrapper around the standard List.

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Add | `void Add(T item)` | Add element |
| Remove | `bool Remove(T item)` | Remove element |
| Clear | `void Clear()` | Clear list |
| Count | `int Count` | Element count |

## Usage Example

```csharp
MBList<ItemObject> items = new MBList<ItemObject>();
items.Add(item);
int count = items.Count;
```
