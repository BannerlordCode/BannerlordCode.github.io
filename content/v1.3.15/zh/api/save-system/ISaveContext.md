---
title: "ISaveContext"
description: "保存会话的抽象契约：把根对象图展平、分配稳定 id 并产出 GameData。"
---

# ISaveContext

> **一句话职责：** 定义一次“保存会话”该做什么——给定根对象，遍历对象图、给每个对象/容器/字符串分配稳定 id，并最终生成 `GameData`。

**命名空间：** `TaleWorlds.SaveSystem.Save`
**模块：** SaveSystem
**类型：** `interface ISaveContext`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Save/ISaveContext.cs`

## 概述
保存并不是“把对象丢给序列化器”那么简单：跨引用的对象需要稳定的整数 id，字符串要去重，容器与普通对象要走不同路径。`ISaveContext` 把这些需求收敛成一个接口，让收集、id 分配与最终产出 `GameData` 都有统一契约。`LegacySaveContext` 是它的唯一实现，也是 `SaveManager.Save` 背后真正干活的保存上下文。

## 心智模型
把它想成一次“归档任务的工单”：你递给它根对象（`Save`）和元数据，它开工后维护三本台账——对象 id 表、容器 id 表、字符串 id 表——遍历时任何对象都能凭引用查到自己的编号。`DefinitionContext` 告诉它每种类型该怎么拆字段；`SaveData` 是结束时交出的成品。它是保存阶段（而非加载阶段）的核心抽象，由引擎在 `SaveManager.Save` 内构造，modder 不需要、也不应该自己实现它。

## 何时用 / 何时不要用
这是 `internal` 接口，模组代码不应实现或替换它。正确做法是调用 `SaveManager.Save(Game.Current, metaData, slotName, driver)` 让引擎使用 `LegacySaveContext`。只有当你在改引擎保存内核、需要新的保存策略时，才考虑新增 `ISaveContext` 实现。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[DefinitionContext](../DefinitionContext)
- 下游：[LegacySaveContext](../LegacySaveContext)、[GameData](../GameData)
- 相关类型/阶段：[MetaDataExtensions](../MetaDataExtensions)、[BinaryWriterFactory](../BinaryWriterFactory)

## 风险段
- 实现契约严格：任何实现都必须保证 `GetObjectId` / `GetContainerId` / `GetStringId` 在收集后返回一致且存在的 id，否则保存会抛 “Cant find target object”。
- `DefinitionContext` 必须覆盖保存图中出现的每个类型；缺定义会在 `CollectObjects` 抛 “Could not find type definition”。
- id 表线程安全：并发保存时 id 分配与字符串去重需加锁，实现不当会破坏存档一致性。

## 成员说明
- `DefinitionContext DefinitionContext { get; }`：本次保存用的类型定义上下文，提供类/容器/枚举等定义。构造时注入，保存全程只读。
- `int AddOrGetStringId(string text)`：把字符串登记进字符串表，已存在则返回既有 id，否则追加并返回新 id；`null` 返回 -1。字符串去重靠它。
- `int GetObjectId(object target)`：返回某对象在对象表中的 id；若未收集到会触发 FailedAssert，说明保存图遗漏了该对象。
- `int GetContainerId(object target)`：返回容器在容器表中的 id。
- `int GetStringId(string target)`：`null` 返回 -1，否则返回字符串表中该文本的 id。
- `bool Save(object target, MetaData metaData, out string errorMessage)`：保存主入口，返回是否成功；失败时通过 `errorMessage` 带出异常信息。
- `GameData SaveData { get; }`：保存成功后产出的 `GameData`，包含头、字符串、对象数据与容器数据。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
MetaData metaData = SaveManager.LoadMetaData("mySlot", driver);
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[LegacySaveContext](../LegacySaveContext)、[DefinitionContext](../DefinitionContext)
- 架构：[存档系统架构](../../../architecture/save-system)
