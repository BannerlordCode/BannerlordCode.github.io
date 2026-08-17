---
title: "MBReadOnlyList<T>"
description: "TaleWorlds.Library 的“只读视图”集合：引擎通过它把内部列表借给你读取，类型上仍是 List<T> 子类，但契约上不可写——需要改动就复制成 MBList<T>。"
---

# MBReadOnlyList&lt;T&gt;

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyList<T> : List<T>`
**Base:** `System.Collections.Generic.List<T>`
**Source:** `TaleWorlds.Library/MBReadOnlyList.cs`

## 概述

`MBReadOnlyList<T>` 是引擎用来「把内部集合借给你看、但不让你改」的视图类型。它直接继承自 `List<T>`，所以运行时它其实完全可写；「只读」是命名与契约层面的约定——引擎借此保留对底层数据的所有权。

## 心智模型

把 `MBReadOnlyList<T>` 想成引擎递给你的一张「阅览证」而非「所有权」。当你调用 `Campaign.Current.AliveHeroes`、`Clan.Heroes`、`Army.Parties` 这类属性时，拿到的就是它——你可以 `foreach`、按索引读、求 `Count`，但你并不拥有那份内存。引擎可能在下一帧重新赋值这个属性，或在内部逻辑里依赖其当前内容；一旦你通过强制转换往里 `Add`/`Remove`，你就在改引擎正在使用的同一块数据，破坏它的内部记账（比如缓存的计数、派系/队伍关系），表现取决于引擎实现：要么你的修改被随后的重新赋值静默丢弃，要么直接污染战役状态造成崩溃或未定义行为。所以它真正的用法是「读」，需要写就 `new MBList<T>(this)` 复制一份属于你自己的。

## 何时用 / 何时不要用

- **用**：遍历/查询引擎返回的列表；按索引读取；作为只读参数传给接受 `MBReadOnlyList<T>` 的引擎方法。
- **不要用**：不要对它 `Add`/`Remove`/`Clear`/`Insert`（违反契约）；不要把它强转成 `List<T>` 或 `MBList<T>` 后写入；不要假设它是冻结快照——它可能随引擎逻辑变化；需要可变副本就 `new MBList<T>(readOnlyList)` 立即复制。

## 关键成员

`MBReadOnlyList.cs` 自身只定义了构造函数；它**不重写任何写入方法**，`Add`/`Remove` 全部来自 `List<T>`——这正是危险所在。

### 构造函数（MBReadOnlyList.cs 定义的全部内容）
- `MBReadOnlyList()` / `MBReadOnlyList(int capacity)` / `MBReadOnlyList(IEnumerable<T> collection)`。

### 继承的「读取友好」操作（不会修改底层集合，放心用）
- `Count`、`this[index]`：长度与索引读取。
- `GetEnumerator()`（`foreach`）、`IndexOf`、`Contains`、`Find`、`Exists`、`TrueForAll`、`ConvertAll`、`ForEach`：查询与投影。

### 继承的「危险」操作（编译通过，但契约上不该调用）
- `Add` / `AddRange` / `Insert` / `Remove` / `RemoveAt` / `Clear` / `Sort` 等。这些方法来自 `List<T>`，运行时可执行，但写入的是引擎拥有的数据。

### 如何获取
几乎总是通过引擎属性拿到，而不是自己 `new`：`Campaign.Current.AliveHeroes` / `MobileParties`、`Clan.Heroes`、`Army.Parties` 等都返回 `MBReadOnlyList<T>`。

## 最小真实示例

```csharp
// 引擎属性直接返回 MBReadOnlyList<Hero>：遍历即可，不要改
MBReadOnlyList<Hero> aliveHeroes = Campaign.Current.AliveHeroes;
foreach (Hero hero in aliveHeroes)
{
    // 只读读取：hero.StringId、hero.Clan 等
}

// 需要可变副本：复制成 MBList<T>，这份副本完全属于你
MBList<Hero> editable = new MBList<Hero>(aliveHeroes);
editable.Add(Hero.MainHero);
editable.Sort((x, y) => x.StringId.CompareTo(y.StringId));

// 另一个真实只读视图：主角所属家族的英雄列表
MBReadOnlyList<Hero> clanHeroes = Hero.MainHero.Clan.Heroes;
for (int i = 0; i < clanHeroes.Count; i++)
{
    Hero hero = clanHeroes[i];
    // 只读读取，不要写入
}
```

## 风险与陷阱

- **类型可写但契约只读。** `MBReadOnlyList<T>` 继承自 `List<T>`，编译期不阻止 `Add`/`Remove`；强制转换后写入不会立刻抛异常，但你在改引擎拥有的数据，可能破坏其依赖的内部状态。
- **底层可能被替换。** 引擎可能在 tick 中重新赋值该属性（例如重建缓存列表）。你拿到的引用是某一时刻的列表，但下一次访问属性会得到新列表——你之前对旧列表的修改要么被丢弃，要么与引擎新列表不一致。
- **缓存/长期持有会过期。** 把一个 `MBReadOnlyList<T>` 存进字段并长期依赖，可能在其底层被引擎刷新后表现「过期」或与实际状态错位。需要稳定副本就 `new MBList<T>(...)` 立即复制。
- **家族/派系计数依赖。** `Clan.Heroes`、`Army.Parties` 等视图背后有引擎维护的计数与关系；外部增删会让这些内部状态失同步，引发崩溃或逻辑错误。
- **强转成 `MBList<T>` 会失败。** 运行时该对象通常是 `MBReadOnlyList<T>` 自身，并非 `MBList<T>` 实例，`(MBList<T>)someReadOnly` 会抛 `InvalidCastException`。即便侥幸持有的是 `MBList<T>`，也应尊重调用方给出的只读契约。

## 依赖关系

- 可变副本：[MBList](../MBList/)——需要改动时复制成它。
- 数值处理：[MathF](../MathF/)——遍历时做数值处理。
- 位置列表：[Vec2](../Vec2/) / [Vec3](../Vec3/)——坐标列表的常见载体。
- 实战样例：[TroopRoster](../../campaign/TroopRoster/) 的名册/队伍大量返回此类只读视图。

- 父级：[core-extra API](../)
- 同级：[MathF](../MathF/) · [MBList](../MBList/)
- 相关：[Vec2](../Vec2/) · [Vec3](../Vec3/) · [TroopRoster](../../campaign/TroopRoster/)
