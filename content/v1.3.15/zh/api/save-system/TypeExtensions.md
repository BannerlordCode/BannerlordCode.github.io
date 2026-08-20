---
title: "TypeExtensions"
description: "反射辅助类，判断一个 Type 是否属于存档系统支持的容器（List/Dictionary/数组/MBList/MBReadOnlyList/Queue）并映射出 ContainerType。"
---

# TypeExtensions

> **一句话职责：** TypeExtensions 用 `IsContainer` 在遍历对象图时快速回答“这个成员是普通对象，还是要展开元素的容器？如果是容器，是哪一种？”

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `internal static class TypeExtensions`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/TypeExtensions.cs`

## 概述
存档系统在收集对象图（[LegacySaveContext](../LegacySaveContext) 的 `CollectObjects`）时，每遇到一个成员都要决定走哪条递归路径：普通对象交给 `ObjectSaveData` 递归其字段/属性，容器则交给 `ContainerSaveData` 递归其元素。`TypeExtensions.IsContainer` 就是这道分诊逻辑。它检查类型的泛型定义是否等于 `Dictionary<,>` / `List<>` / `MBList<>` / `MBReadOnlyList<>` / `Queue<>`,或者是否 `IsArray`，命中后通过 `out ContainerType` 告诉你具体是哪种容器。这是一个纯函数、无副作用、按成员高频调用，所以实现得很轻量（只比对泛型定义，不分配额外对象）。

## 心智模型
把它想成“对象图遍历时的红绿灯”。遍历器每走到一个成员就问 `type.IsContainer(out var kind)`：绿灯（返回 `true`）说明前面是容器路口，要根据 `kind` 进 `List` / `Dictionary` / 数组 / `Queue` 对应的处理分支；红灯（`false`）说明是普通对象或基础类型，走普通递归。`ArchiveConcurrentSerializer` 与 `ArchiveSerializer` 据 `ContainerType` 选择对应的 `GenerateForXxx` 代码路径，而 `LegacySaveContext.CollectContainerObjects` 据此调用 `ContainerSaveData.GetChildObjects` 把元素继续入队。`MBList<>` / `MBReadOnlyList<>` 是 TaleWorlds 自定义集合，也被同等对待，所以 Mod 里用它们不会漏序列化。它是 `internal static`，modder 一般只在写自定义 `IContainerResolver` 或排查“某个集合没被存档”时才会间接接触。

## 何时用 / 何时不要用
- **不要用：** 正常开发不用手动调用；对象图遍历由框架自动完成。直接 `new` 它也没意义（全是静态方法）。
- **正确做法：** 想确保你的集合能被存档，确认它属于上述受支持容器类型之一；自定义集合若不在列表内，需通过 `ISaveContext` / 自定义定义器接入，而不是自己调 `IsContainer`。

## 依赖图
- 上游：[ContainerType](../ContainerType)、[LegacySaveContext](../LegacySaveContext)
- 下游：[ContainerSaveData](../ContainerSaveData)、[ArchiveSerializer](../ArchiveSerializer)、[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)
- 相关类型/阶段：[SaveManager](../SaveManager)、[ISaveContext](../ISaveContext)

## 风险段
- **只认受支持容器：** 非泛型自定义集合（既不是 `List<>` 也不是数组等）`IsContainer` 返回 `false`，会被当成普通对象处理，导致集合内容不被序列化——这是“集合没存进去”的常见根因。
- **仅比对泛型定义：** 它看的是 `GetGenericTypeDefinition()`，如果某类型是 `List<>` 的子类而不是直接用 `List<>`，依然能命中；但若用全新的泛型容器且未注册定义，则不会命中。
- **internal 边界：** `internal static`，外部模块不可调用，跨模块反射会随版本失效。

## 成员说明
- `static bool IsContainer(this Type type)`：重载一，只返回“是不是容器”，不告诉你具体种类。
- `static bool IsContainer(this Type type, out ContainerType containerType)`：重载二，命中时通过 `out` 参数给出具体 `ContainerType`（`List` / `Dictionary` / `CustomList` / `CustomReadOnlyList` / `Queue` / `Array` / `None`）。对 `Dictionary<,>` 返回 `Dictionary`，`List<>` 返回 `List`，`MBList<>` 返回 `CustomList`，`MBReadOnlyList<>` 返回 `CustomReadOnlyList`，`Queue<>` 返回 `Queue`，数组返回 `Array`，其余返回 `false` 且 `containerType = None`。

## 示例
```csharp
Type t = typeof(List<Hero>);
ContainerType kind;
if (t.IsContainer(out kind))
    Debug.Print("container: " + kind.ToString());
SaveManager.Save(Game.Current, new MetaData(), "mySlot", new AsyncFileSaveDriver());
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ContainerType](../ContainerType)、[ContainerSaveData](../ContainerSaveData)、[LegacySaveContext](../LegacySaveContext)
- 架构：[存档系统架构](../../../architecture/save-system)
