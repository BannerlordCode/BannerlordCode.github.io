# MBReadOnlyList / MBReadOnlyList

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/MBReadOnlyList.cs`
**Purpose**: Pseudo read-only list that actually inherits from List T / 伪只读列表，实际继承自 List T

## Overview / 概述

`MBReadOnlyList<T>` is a custom list type from TaleWorlds. The "ReadOnly" in its name is a naming convention and **does NOT mean it is truly read-only**. It directly inherits from `List<T>`, so all mutation operations (such as `Add`, `Remove`, `Clear`) still work.

`MBReadOnlyList<T>` 是 TaleWorlds 自定义的列表类型，名称中的 "ReadOnly" 是一种命名约定，**并不意味着它真正只读**。它直接继承自 `List<T>`，因此所有 mutation 操作（如 `Add`、`Remove`、`Clear`）仍然有效。

:::warning Important Note / 重要提示
**This class is NOT truly read-only!** If you need a true read-only wrapper, use `System.Collections.ObjectModel.ReadOnlyCollection<T>`.

**这个类不是真正的只读！** 如果需要真正的只读包装器，应使用 `System.Collections.ObjectModel.ReadOnlyCollection<T>`。
:::

## Constructors / 构造函数

| Constructor | Signature | Description |
|-------------|-----------|-------------|
| Default | `public MBReadOnlyList()` | Create empty list / 创建空列表 |
| WithCapacity | `public MBReadOnlyList(int capacity)` | Create list with specified capacity / 创建具有指定容量的列表 |
| FromCollection | `public MBReadOnlyList(IEnumerable<T> collection)` | Create from existing collection / 从现有集合创建 |

## Inherited Methods / 继承的方法

Since `MBReadOnlyList<T>` directly inherits from `List<T>`, it has all public methods of List:

由于 `MBReadOnlyList<T>` 直接继承自 `List<T>`，它拥有 List 的所有 public 方法：

| Method | Description |
|--------|-------------|
| `Add(T item)` | Add element / 添加元素 |
| `AddRange(IEnumerable<T> collection)` | Add collection / 添加集合 |
| `Remove(T item)` | Remove element / 移除元素 |
| `RemoveAt(int index)` | Remove element at index / 移除指定索引元素 |
| `Clear()` | Clear list / 清空列表 |
| `Insert(int index, T item)` | Insert element / 插入元素 |
| `Sort()` | Sort / 排序 |
| And more... | And more... / 等等 |

## Extension Methods / 扩展方法

### TaleWorlds.Library.Extensions

| Method | Signature | Description |
|--------|-----------|-------------|
| IndexOfMin | `public static int IndexOfMin<T>(this MBReadOnlyList<T> self, Func<T, int> func)` | Return index of minimum value / 返回最小值对应的索引 |
| IndexOfMax | `public static int IndexOfMax<T>(this MBReadOnlyList<T> self, Func<T, int> func)` | Return index of maximum value / 返回最大值对应的索引 |
| FindIndex | `public static int FindIndex<T>(this MBReadOnlyList<T> source, Func<T, bool> predicate)` | Return first index matching predicate / 返回满足条件的第一个索引 |
| FindLastIndex | `public static int FindLastIndex<T>(this MBReadOnlyList<T> source, Func<T, bool> predicate)` | Return last index matching predicate / 返回满足条件的最后一个索引 |

### TaleWorlds.Core.Extensions

| Method | Signature | Description |
|--------|-----------|-------------|
| GetRandomElement | `public static T GetRandomElement<T>(this MBReadOnlyList<T> e)` | Get random element / 随机获取一个元素 |
| GetRandomElementWithPredicate | `public static T GetRandomElementWithPredicate<T>(this MBReadOnlyList<T> e, Func<T, bool> predicate)` | Get random element matching predicate / 随机获取满足条件的元素 |

## Comparison / 对比

| Feature | MBReadOnlyList T | ReadOnlyCollection T | List T |
|---------|------------------|---------------------|--------|
| Namespace | TaleWorlds.Library | System.Collections.ObjectModel | System.Collections.Generic |
| Inherits from | `List<T>` | `IReadOnlyList<T>` | `List<T>` |
| Truly Read-Only | **No 否** | Yes 是 | No 否 |
| Add/Remove/Clear | Works 有效 | Throws 抛出异常 | Works 有效 |
| Memory Overhead | Low 低 | Medium 中 | Low 低 |
| Cast to List | Direct 直接 | Requires original 直接 | N/A |

## Usage Example / 使用示例

```csharp
// Create MBReadOnlyList
// 创建 MBReadOnlyList
MBReadOnlyList<string> list = new MBReadOnlyList<string>();
list.Add("item1");  // Still works! / 仍然有效!
list.Add("item2");
list.Add("item3");

// Extension methods
// 扩展方法
int minIndex = list.IndexOfMin(s => s.Length);
int maxIndex = list.IndexOfMax(s => s.Length);
int foundIndex = list.FindIndex(s => s.StartsWith("item"));
string random = list.GetRandomElement();

// Warning: This is NOT truly read-only!
// 警告：这不是真正只读!
list.Clear();  // List is cleared! / 列表被清空!
```

## When to Use / 使用场景

- **Use MBReadOnlyList when**: You want to signal intent that a list should not be modified, but need the flexibility of List
- **Use ReadOnlyCollection when**: You need true read-only enforcement and don't want callers to cast
- **Use List when**: You need full mutability

- **使用 MBReadOnlyList**: 当你想表明列表不应被修改的意图，但需要 List 的灵活性
- **使用 ReadOnlyCollection**: 当你需要真正的只读强制执行
- **使用 List**: 当你需要完全的可变性

## Notes / 注意事项

- `MBReadOnlyList`'s "ReadOnly" prefix is TaleWorlds naming convention, does not represent actual behavior
- `MBReadOnlyList` 的 "ReadOnly" 前缀是 TaleWorlds 的命名约定，不代表实际行为
- Do not rely on `MBReadOnlyList` to prevent modification - use `ReadOnlyCollection` instead
- 不要依赖 `MBReadOnlyList` 来防止修改 - 使用 `ReadOnlyCollection` 代替
- It's often used for API return values to indicate "modification not recommended" but not enforced
- 它常用于 API 返回值，表示"建议不要修改"但不是强制要求
