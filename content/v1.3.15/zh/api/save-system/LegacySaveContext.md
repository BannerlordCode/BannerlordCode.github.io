---
title: "LegacySaveContext"
description: "ISaveContext 的默认实现：遍历对象图、并发序列化并产出 GameData 的保存编排器。"
---

# LegacySaveContext

> **一句话职责：** 引擎当前使用的保存上下文：从根对象出发遍历整张对象图，分配 id，多线程序列化为字节，最终组装成 `GameData`。

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** SaveSystem
**类型：** `class LegacySaveContext : ISaveContext`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Save/LegacySaveContext.cs`

## 概述
`LegacySaveContext` 是 `ISaveContext` 的实现，也是 `SaveManager.Save` 背后真正执行保存的编排器。它先以根对象为起点做广度遍历，把对象与容器分别收集进两张表并去重字符串；随后用 `TWParallel.ForWithoutRenderThread` 并行地把每个对象/容器交给 `ObjectSaveData`/`ContainerSaveData` 序列化；最后把头信息、`ArchiveSerializer` 的字符串块、对象数据与容器数据拼成 `GameData`。它还内嵌了 `SaveStatistics` 结构用于可选的保存统计。

## 心智模型
把它想成“搬家打包队长”：先拿着房本（根对象）列出所有家具（对象图），给每件贴编号、给每种容器单独建册；然后叫一队工人（并行线程）各自打包并写进线程局部的箱子（`BinaryWriterFactory` + `ArchiveConcurrentSerializer`）；打包完队长把目录和所有箱子汇总成一份完整货单（`GameData`）。它在单次 `Save` 调用内被构造、使用、丢弃，容量预分配为 131072 以容纳大型存档。modder 不直接使用它，但它的行为决定了你的 `[Saveable]` 类型如何被遍历与写入。

## 何时用 / 何时不要用
不要自己 `new LegacySaveContext`——它是引擎保存流程的内部实现，由 `SaveManager.Save` 创建。写模组时只调用 `SaveManager.Save(Game.Current, metaData, slotName, driver)`。只有在你修改引擎保存内核、想替换保存策略时，才考虑提供新的 `ISaveContext` 实现；此时 `LegacySaveContext` 是最完整的参考样本。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[ISaveContext](../ISaveContext)、[DefinitionContext](../DefinitionContext)
- 下游：[GameData](../GameData)、[ArchiveConcurrentSerializer](../ArchiveConcurrentSerializer)、[ArchiveSerializer](../ArchiveSerializer)
- 相关类型/阶段：[BinaryWriterFactory](../BinaryWriterFactory)、[ObjectSaveData](../)（见 ContainerSaveData 同族）、[ContainerSaveData](../ContainerSaveData)

## 风险段
- 异常被吞并报告：`Save` 用 `try/catch` 包住全过程，任何异常都转为 `false` 并通过 `out errorMessage` 返回；若保存失败，务必检查 `errorMessage` 而不是只看返回值。
- 统计默认关闭：`EnableSaveStatistics` 始终返回 `false`，`GetStatistics()` 在默认构建下拿不到真实数据。
- 定义缺失即崩：遍历中某类型在 `DefinitionContext` 找不到定义会抛 “Could not find type definition of type”，保存直接失败。
- 容量上限：内部表预分配 131072，超出会扩容但会出现明显 GC 抖动，超大存档需注意性能。

## 成员说明
- `RootObject` / `SaveData` / `DefinitionContext`：本次保存的根对象、最终产出的 `GameData`、以及类型定义上下文，均由构造与 `Save` 内部赋值。
- `Save(object target, MetaData metaData, out string errorMessage)`：保存主入口。设根对象→收集对象图→并行序列化对象与容器→写字符串块→`FinalizeAndGetBinaryData` 汇总成 `GameData`，返回是否成功。
- `AddStrings(List<string>)` / `AddOrGetStringId(string)` / `GetStringId(string)`：字符串表的登记与查询，写入时加锁保证线程安全与去重。
- `GetObjectId(object)` / `GetContainerId(object)`：查询对象/容器在表中的 id；找不到对象会 FailedAssert。
- `static SaveStatistics GetStatistics()`：返回内嵌 `SaveStatistics`（类型/容器的大小与计数），仅当统计开启时有意义。
- `struct SaveStatistics`：提供 `GetObjectCounts(key)`、`GetContainerCounts(key)`、`GetContainerSize(key)`、`GetTypeKeys()`、`GetContainerKeys()`，用于诊断存档体积分布。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[ISaveContext](../ISaveContext)、[DefinitionContext](../DefinitionContext)
- 架构：[存档系统架构](../../../architecture/save-system)
