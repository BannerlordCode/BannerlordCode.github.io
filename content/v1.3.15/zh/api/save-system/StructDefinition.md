---
title: "StructDefinition"
description: "值类型（struct）的存档定义节点：继承自 TypeDefinition，用于按值整体序列化结构体，可附带 IObjectResolver 处理结构体内部引用，与按引用共享的类定义形成对比。"
---
# StructDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `internal class StructDefinition : TypeDefinition`
**基类：** [TypeDefinition](../TypeDefinition) → [TypeDefinitionBase](../TypeDefinitionBase)
**源文件：** `TaleWorlds.SaveSystem/Definition/StructDefinition.cs`

## 概述

`StructDefinition` 是“值类型（`struct`）”在定义上下文中的节点。它继承自 [TypeDefinition](../TypeDefinition)（进而 [TypeDefinitionBase](../TypeDefinitionBase)），把一个 `struct` 类型登记为可序列化：构造时接收 `Type`、`int saveId`，以及一个可选的 `IObjectResolver objectResolver`（当结构体内部含有需要解析/去重的引用时由它处理）。与类（`class`）的关键区别在于：**结构体按值整体复制**——存档时它不被赋予对象身份、不参与对象去重，每次出现都是一份独立拷贝；而类实例会被分配对象 id 并在对象图中共享。引擎内部的 `Vec2`/`Vec3`/`MatrixFrame` 等数学结构体走的是 basic type 路径，而像 `KeyValuePair<,>`、`Nullable<>`、`ValueTuple` 这类**泛型/带私有字段的结构体**则经 `StructDefinition` 登记。它解决的是“值类型如何被成员级序列化”的问题。

## 心智模型

- **是什么：** 结构体类型的存档定义，记录“某个 struct = 哪个 SaveId + 是否有对象解析器”，让值类型按成员被读写。
- **何时用：** 处在保存系统的**类型定义层（值类型子层）**。当你存档的字段是一个自定义 `struct`（或 BCL 泛型结构体如 `KeyValuePair<,>`），且该结构体不能被当作 basic type 整体序列化时，由 definer 登记为 `StructDefinition`。
- **何时不要用：** 不要把“需要共享身份”的数据做成 struct——结构体按值复制，同一逻辑对象在多处引用时会被复制成多份、互不同步；那种场景应使用 `class` + `[SaveableRootClass]` 并走 [MBObjectManager](../../campaign-ext/MBObjectManager)。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner)（`AddStructDefinition` / `AddStructDefinitionWithCustomFields`）构造并登记，持有在全局 [DefinitionContext](../DefinitionContext)；运行期只读。
- **处在哪一层：** 定义层。序列化阶段 [ArchiveSerializer](../ArchiveSerializer) 按 `StructDefinition` 逐成员写出结构体值，读档时由 [ArchiveDeserializer](../ArchiveDeserializer) 重建。

## 何时使用 / 何时不要使用

适合：

- 自定义只读聚合 `struct`（如坐标对、简单配置项）作为字段值随存档读写。
- 内建泛型结构体（`KeyValuePair<,>`、`Nullable<>`、`ValueTuple`）由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 用 `CustomField` 登记为 `StructDefinition`。

不适合 / 危险：

- **把应共享的对象做成 struct** → 按值复制导致多处状态脱节，是隐蔽的逻辑错误。
- **结构体成员引用了未被登记的类型** → 保存/加载抛异常或坏档。
- **跨版本改 `saveId`** → 旧档按旧编号找不到结构体定义（坏档）。
- **结构体字段含循环引用** → 值类型不应有对象身份，循环引用在按值序列化时会无限展开或失败。

## 依赖图

- [TypeDefinition](../TypeDefinition) —— 直接父类，提供成员表与对象解析器框架。
- [TypeDefinitionBase](../TypeDefinitionBase) —— 更上层基类，提供 `SaveId`/`Type`/`TypeLevel`。
- [IObjectResolver](../IObjectResolver) —— 可选解析器；结构体内部含引用时由它处理重建。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— `AddStructDefinition` / `AddStructDefinitionWithCustomFields` 创建并登记它的源头。
- [CustomField](../CustomField) —— 结构体私有字段（如 `KeyValuePair` 的 `key`/`value`）经它登记。
- [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) —— 实例化大量内建 `StructDefinition`。
- [DefinitionContext](../DefinitionContext) —— 持有结构体定义。

## 风险

- **结构体作为“共享身份”使用** → 按值复制，引用处各持副本、互不同步；需共享身份请改用 class + [MBObjectManager](../../campaign-ext/MBObjectManager)。
- **`saveId` 冲突或跨版本变更** → 定义冲突或旧档识别失败（坏档）。
- **结构体成员类型未登记** → 在 [DefinitionContext](../DefinitionContext) 查不到定义，保存/加载失败。
- **`IObjectResolver` 返回错误对象** → 结构体内部引用重建错乱，读档数据错误。

## 成员说明

### 构造参数 `type` / `saveId`

`StructDefinition(Type type, int saveId)`：把 `struct` 类型与 `SaveId` 交给父类 [TypeDefinition](../TypeDefinition) 体系登记。`saveId` 跨版本必须稳定且唯一。

### 构造参数 `type` / `saveId` / `objectResolver`

`StructDefinition(Type type, int saveId, IObjectResolver objectResolver)`：在上式基础上附加重建时使用的对象解析器，供结构体内部引用（如引用某个可恢复对象）正确还原。

### 与类的区别

`StructDefinition` 不分配对象 id、不参与对象去重；每次出现都按值整体写出。真正的共享身份由类定义 + [MBObjectManager](../../campaign-ext/MBObjectManager) 负责。

## 示例

内建泛型结构体由引擎登记为 `StructDefinition`；模组侧只触发保存，背后这些值类型被按成员写入：

```csharp
// 引擎内部（SaveableBasicTypeDefiner）登记 KeyValuePair 的结构体定义（示意）：
//   AddStructDefinitionWithCustomFields(
//       typeof(KeyValuePair<,>), 102,
//       new Tuple<string, short>[] { new("key", 1), new("value", 2) }, null);

// 模组侧：以 Game 为根保存，字段里的 KeyValuePair<int,string> 经 StructDefinition 按值读写：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：结构体按值复制，不适合表达需要跨处共享身份的数据；这类需求应使用 class + [MBObjectManager](../../campaign-ext/MBObjectManager)。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeDefinition](../TypeDefinition) · [TypeDefinitionBase](../TypeDefinitionBase) · [IObjectResolver](../IObjectResolver) · [CustomField](../CustomField) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveManager](../SaveManager)
