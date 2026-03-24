# MBReadOnlyList / MBReadOnlyList

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/MBReadOnlyList.cs`
**Purpose**: 伪只读列表，实际继承自 List T / Pseudo read-only list that actually inherits from List T

## Overview / 概述

`MBReadOnlyList<T>` 是 TaleWorlds 自定义的列表类型，名称中的 "ReadOnly" 是一种命名约定，**并不意味着它真正只读**。它直接继承自 `List<T>`，因此所有 mutation 操作（如 `Add`、`Remove`、`Clear`）仍然有效。

`MBReadOnlyList<T>` is a custom list type from TaleWorlds. The "ReadOnly" in its name is a naming convention and **does NOT mean it is truly read-only**. It directly inherits from `List<T>`, so all mutation operations (such as `Add`, `Remove`, `Clear`) still work.

:::warning 重要提示 / Important Note
**这个类不是真正的只读！** 如果需要真正的只读包装器，应使用 `System.Collections.ObjectModel.ReadOnlyCollection<T>`。

**This class is NOT truly read-only!** If you need a true read-only wrapper, use `System.Collections.ObjectModel.ReadOnlyCollection<T>`.
:::

## Constructors / 构造函数

| Constructor | Signature | Description |
|-------------|-----------|-------------|
| Default | `public MBReadOnlyList()` | 创建空列表 / Create empty list |
| WithCapacity | `public MBReadOnlyList(int capacity)` | 创建具有指定容量的列表 / Create list with specified capacity |
| FromCollection | `public MBReadOnlyList(IEnumerable<T> collection)` | 从现有集合创建 / Create from existing collection |

## Inherited Methods / 继承的方法

由于 `MBReadOnlyList<T>` 直接继承自 `List<T>`，它拥有 List 的所有 public 方法：

Since `MBReadOnlyList<T>` directly inherits from `List<T>`, it has all public methods of List:

| Method | Description |
|--------|-------------|
| `Add(T item)` | 添加元素 / Add element |
| `AddRange(IEnumerable<T> collection)` | 添加集合 / Add collection |
| `Remove(T item)` | 移除元素 / Remove element |
| `RemoveAt(int index)` | 移除指定索引元素 / Remove element at index |
| `Clear()` | 清空列表 / Clear list |
| `Insert(int index, T item)` | 插入元素 / Insert element |
| `Sort()` | 排序 / Sort |
| And more... | 等等 / And more... |

## Extension Methods / 扩展方法

### TaleWorlds.Library.Extensions

| Method | Signature | Description |
|--------|-----------|-------------|
| IndexOfMin | `public static int IndexOfMin<T>(this MBReadOnlyList<T> self, Func<T, int> func)` | 返回最小值对应的索引 / Return index of minimum value |
| IndexOfMax | `public static int IndexOfMax<T>(this MBReadOnlyList<T> self, Func<T, int> func)` | 返回最大值对应的索引 / Return index of maximum value |
| FindIndex | `public static int FindIndex<T>(this MBReadOnlyList<T> source, Func<T, bool> predicate)` | 返回满足条件的第一个索引 / Return first index matching predicate |
| FindLastIndex | `public static int FindLastIndex<T>(this MBReadOnlyList<T> source, Func<T, bool> predicate)` | 返回满足条件的最后一个索引 / Return last index matching predicate |

### TaleWorlds.Core.Extensions

| Method | Signature | Description |
|--------|-----------|-------------|
| GetRandomElement | `public static T GetRandomElement<T>(this MBReadOnlyList<T> e)` | 随机获取一个元素 / Get random element |
| GetRandomElementWithPredicate | `public static T GetRandomElementWithPredicate<T>(this MBReadOnlyList<T> e, Func<T, bool> predicate)` | 随机获取满足条件的元素 / Get random element matching predicate |

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
// 创建 MBReadOnlyList
// Create MBReadOnlyList
MBReadOnlyList<string> list = new MBReadOnlyList<string>();
list.Add("item1");  // 仍然有效 / Still works!
list.Add("item2");
list.Add("item3");

// 扩展方法 / Extension methods
int minIndex = list.IndexOfMin(s => s.Length);
int maxIndex = list.IndexOfMax(s => s.Length);
int foundIndex = list.FindIndex(s => s.StartsWith("item"));
string random = list.GetRandomElement();

// 警告：这不是真正只读！
// Warning: This is NOT truly read-only!
list.Clear();  // 列表被清空！/ List is cleared!
```

## When to Use / 使用场景

- **Use MBReadOnlyList**: 当你想表明列表不应被修改的意图，但需要 List 的灵活性
- **Use ReadOnlyCollection**: 当你需要真正的只读强制执行
- **Use List**: 当你需要完全的可变性

- **Use MBReadOnlyList when**: You want to signal intent that a list should not be modified, but need the flexibility of List
- **Use ReadOnlyCollection when**: You need true read-only enforcement and don't want callers to cast
- **Use List when**: You need full mutability

## Notes / 注意事项

- `MBReadOnlyList` 的 "ReadOnly" 前缀是 TaleWorlds 的命名约定，不代表实际行为
- `MBReadOnlyList`'s "ReadOnly" prefix is TaleWorlds naming convention, does not represent actual behavior
- 不要依赖 `MBReadOnlyList` 来防止修改 - 使用 `ReadOnlyCollection` 代替
- Do not rely on `MBReadOnlyList` to prevent modification - use `ReadOnlyCollection` instead
- 它常用于 API 返回值，表示"建议不要修改"但不是强制要求
- It's often used for API return values to indicate "modification not recommended" but not enforced
