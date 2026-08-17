---
title: "MBList<T>"
description: "TaleWorlds.Library 的 List<T> 可变子类，是战役/任务数据里默认的可保存集合（名册、队伍、行为列表），可构造、可增删排序、可被存档系统枚举。"
---

# MBList&lt;T&gt;

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList<T> : MBReadOnlyList<T>`
**Base:** `MBReadOnlyList<T>`（最终继承 `System.Collections.Generic.List<T>`）
**Source:** `TaleWorlds.Library/MBList.cs`

## 概述

`MBList<T>` 是引擎在战役与任务数据里默认使用的可变集合类型：它继承 `MBReadOnlyList<T>`（进而继承 `List<T>`），在几乎所有需要「可增删、可排序、可保存」的场合充当主力容器，例如队伍名册、据点驻军、行为维护的列表。

## 心智模型

`MBList<T>` 之于 Bannerlord，约等于 `List<T>` 之于普通 C#，但它多了一层含义：它是「引擎认识且能保存」的集合。战役对象图里的名册、队伍、英雄集合经常以 `MBList<T>` 持有，并被序列化为存档；当你想新建一个会被引擎 API 接受、或需要进入存档的对象列表时，应直接 `new MBList<T>()`，而不是裸 `List<T>`——否则部分引擎接口会拒绝，或其元素无法被保存系统枚举。它和引擎返回给你的 `MBReadOnlyList<T>` 是同一继承链的两端：前者你能写，后者是引擎的只读契约（见 [MBReadOnlyList](../MBReadOnlyList/)）。`TroopRoster` 内部正是用 `MBList<TroopRosterElement>` 持有成员，并通过 `GetTroopRoster()` 把它交出来。

## 何时用 / 何时不要用

- **用**：构建会被引擎 API 接受、或需要进入存档的集合；从 `MBReadOnlyList<T>` 复制出可变副本做本地修改；作为 Behavior/模型的字段保存对象引用。
- **不要用**：仅需遍历且不需要修改时，直接用引擎返回的 `MBReadOnlyList<T>`，不必复制；若元素是普通值类型且完全不涉及引擎/保存，裸 `List<T>` 也行；绝不要把别人返回的 `MBReadOnlyList<T>` 强转成 `MBList<T>` 去改（见 [MBReadOnlyList](../MBReadOnlyList/) 风险）。

## 关键成员

`MBList.cs` 自身只定义了构造函数；其余可变能力全部来自继承链（`MBReadOnlyList<T>` → `List<T>`），这里按实际调用分组。

### 构造函数（MBList.cs 定义的全部内容）
- `MBList()`：空集合。
- `MBList(int capacity)`：预分配容量，已知规模时避免反复扩容。
- `MBList(IEnumerable<T> collection)`：从任意可枚举复制（最常用于把 `MBReadOnlyList<T>` 变成可变副本）。
- `MBList(List<T> collection)`：从裸 `List<T>` 包装而来。

### 继承的可变操作（实际由 `List<T>` 提供）
- `Add(T)` / `AddRange(IEnumerable<T>)`：追加单个或一批元素。
- `Insert(int, T)` / `RemoveAt(int)`：按位置插入与删除。
- `Remove(T)` / `RemoveAll(Predicate<T>)`：按值或条件删除。
- `Clear()`：清空。
- `Find(Predicate<T>)` / `FindAll` / `IndexOf` / `Contains`：查询。
- `Sort()` / `Sort(Comparison<T>)`：排序——增删后需要有序遍历时调用。
- `Count` 与 `this[index]`：长度与索引访问；`Capacity` 容量。

### 作为只读视图使用
因为 `MBList<T>` 是 `MBReadOnlyList<T>` 的子类，可以直接把 `MBList<T>` 赋给 `MBReadOnlyList<T>` 参数/字段，交给只读取的引擎方法。

## 最小真实示例

```csharp
// 从引擎返回的只读视图复制出可变副本：Campaign.Current.AliveHeroes 是 MBReadOnlyList<Hero>
MBReadOnlyList<Hero> aliveHeroes = Campaign.Current.AliveHeroes;
MBList<Hero> workingSet = new MBList<Hero>(aliveHeroes);

// 使用 MBList 自有的可变能力
workingSet.Add(Hero.MainHero);
workingSet.AddRange(Campaign.Current.DeadOrDisabledHeroes);
workingSet.Sort((x, y) => x.StringId.CompareTo(y.StringId));
bool hasMain = workingSet.Contains(Hero.MainHero);

// MBList 是 MBReadOnlyList 的子类，可直接当作只读视图传给只读取的引擎代码
MBReadOnlyList<Hero> readonlyView = workingSet;
int count = readonlyView.Count;

// TroopRoster 内部用 MBList<TroopRosterElement> 持有成员，并通过 GetTroopRoster() 交出
MBList<TroopRosterElement> elements = MobileParty.MainParty.Party.MemberRoster.GetTroopRoster();
elements.Sort((a, b) => a.Number.CompareTo(b.Number));
```

## 风险与陷阱

- **保存要求元素可保存。** `MBList<T>` 进入存档时，`T` 自身必须能被保存系统序列化（带 `[Saveable]` 定义，或通过 `MBObjectManager` 以引用方式记录）。往里塞不可保存的引用（如瞬时的 ViewModel、闭包、未注册的类型）会在保存时失败或静默丢失。
- **存的是引用而非拷贝。** 从 `Campaign.Current.AliveHeroes` 复制出 `MBList<Hero>` 后，修改副本不会影响原只读视图，但副本里的 `Hero` 对象仍是同一个引用——你改 `Hero` 的字段会直接反映到战役状态。需要深隔离时自行克隆元素。
- **容量与性能。** 频繁 `Add` 会触发内部扩容；已知规模时用 `MBList(int capacity)` 预分配。
- **强转陷阱。** 不要把别人返回的 `MBReadOnlyList<T>` 当 `MBList<T>` 使用——它运行时可能是 `MBReadOnlyList<T>` 自身，强转会抛 `InvalidCastException`，即使绕过的写入也违反只读契约（见 [MBReadOnlyList](../MBReadOnlyList/)）。

## 依赖关系

- 只读基类：[MBReadOnlyList](../MBReadOnlyList/)——既是基类，也是引擎只读属性的返回类型。
- 数值处理：[MathF](../MathF/)——遍历集合时常对元素做数值变换。
- 位置集合：[Vec2](../Vec2/) / [Vec3](../Vec3/)——坐标列表的常见载体。
- 实战样例：[TroopRoster](../../campaign/TroopRoster/) 内部即用 `MBList<TroopRosterElement>` 存放成员。

- 父级：[core-extra API](../)
- 同级：[MathF](../MathF/) · [MBReadOnlyList](../MBReadOnlyList/)
- 相关：[Vec2](../Vec2/) · [Vec3](../Vec3/) · [TroopRoster](../../campaign/TroopRoster/)
