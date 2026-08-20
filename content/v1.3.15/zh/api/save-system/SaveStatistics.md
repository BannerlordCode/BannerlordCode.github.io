---
title: "SaveStatistics"
description: "保存完成后对每种类型/容器实例数与占用字节的快照，用于排查存档体积瓶颈（需手动开启统计）。"
---

# SaveStatistics

> **一句话职责：** SaveStatistics 是存档性能剖析用的只读快照——告诉你上次保存时每种类型和容器各被写了多少个、占了多少字节。

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** SaveSystem
**类型：** `public struct SaveStatistics`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## 概述
存档体积膨胀、保存卡顿，往往是因为某几个类型被反复写入或容器过大。`SaveStatistics` 就是为定位这类问题而存在的诊断结构。它嵌套在 `LegacySaveContext` 里，由静态方法 `LegacySaveContext.GetStatistics()` 返回。`LegacySaveContext` 内部维护两张静态字典（`_typeStatistics` 与 `_containerStatistics`），但它们**只在 `EnableSaveStatistics` 为 `true` 时才被填充**——而发行版里 `EnableSaveStatistics` 直接返回 `false`，所以默认情况下统计为空。开启后，每次 `LegacySaveContext.Save` 会按类型名累加实例数、字段/属性数与总字节数，再由 `SaveStatistics` 暴露成可读的查询接口。

## 心智模型
把它想成“保存完成后的体检报告”。报告分两栏：对象栏（`GetObjectCounts`）和容器栏（`GetContainerCounts` / `GetContainerSize`）。对象栏返回 `(count, fieldCount, propertyCount, totalBytes)` 四元组，容器栏返回 `(count, elementCount, elementFieldCount, elementPropertyCount, totalBytes)` 五元组——`totalBytes` 即 `Item4` / `Item5`，正是你排查“哪个类型最占空间”时最关心的数字。`GetTypeKeys` / `GetContainerKeys` 列出所有出现过的类型名，方便你遍历打印。它是**只读、不落盘**的：统计只在保存流程里临时生成，用于开发期调优，从不被写进 `.sav`。

## 何时用 / 何时不要用
- **不要用：** 不要在正式发布版本里依赖它——`EnableSaveStatistics` 默认关闭，统计恒为空，且开启会拖慢保存（改为串行遍历）。
- **正确做法：** 仅在本地性能剖析时把 `EnableSaveStatistics` 置 `true`，调用 `LegacySaveContext.GetStatistics()` 打印各类型字节占用，定位体积瓶颈后再关闭。

## 依赖图
- 上游：[LegacySaveContext](../LegacySaveContext)、[ISaveContext](../ISaveContext)
- 下游：`_typeStatistics` / `_containerStatistics`（内部字典）
- 相关类型/阶段：[SaveManager](../SaveManager)、[SaveError](../SaveError)

## 风险段
- **默认关闭：** `EnableSaveStatistics` 返回 `false`，直接调用 `GetStatistics()` 拿到的是空字典，查任何 key 都会得到零值或抛键不存在异常（`GetContainerCounts` / `GetContainerSize` 直接索引 `_containerStatistics[key]`）。
- **开启会降速：** 开启统计后，`SaveSingleObject` / `SaveSingleContainer` 退化为串行 `for` 循环（不再 `TWParallel`），大存档保存会明显变慢。
- **只读快照：** 它是保存时点的快照，再次保存会被覆盖，不要长期持有做跨保存对比。

## 成员说明
- `SaveStatistics(Dictionary<string, ValueTuple<int,int,int,long>> typeStatistics, Dictionary<string, ValueTuple<int,int,int,int,long>> containerStatistics)`：构造时绑定两张内部统计字典，只读引用。
- `ValueTuple<int,int,int,long> GetObjectCounts(string key)`：按类型名取对象统计；不存在返回默认零元组。四项依次为实例数、字段数、属性数、总字节数。
- `ValueTuple<int,int,int,int,long> GetContainerCounts(string key)`：按容器名取容器统计（直接索引内部字典，key 不存在会抛 `KeyNotFoundException`）。五项依次为实例数、元素数、元素字段数、元素属性数、总字节数。
- `long GetContainerSize(string key)`：等价于 `GetContainerCounts(key).Item5`，返回该容器类型占用的总字节。
- `List<string> GetTypeKeys()`：所有出现过的对象类型名列表。
- `List<string> GetContainerKeys()`：所有出现过的容器类型名列表。

## 示例
```csharp
// 仅在 LegacySaveContext.EnableSaveStatistics 为 true 时才有数据（发行版默认为 false）：
LegacySaveContext.SaveStatistics stats = LegacySaveContext.GetStatistics();
foreach (string key in stats.GetTypeKeys())
    Debug.Print(key + " -> " + stats.GetObjectCounts(key).Item4 + " bytes");
SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[LegacySaveContext](../LegacySaveContext)、[ISaveContext](../ISaveContext)、[SaveError](../SaveError)
- 架构：[存档系统架构](../../../architecture/save-system)
