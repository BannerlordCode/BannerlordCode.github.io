---
title: "BasicTypeDefinition"
description: "存档定义层里包裹 IBasicTypeSerializer 的基础类型定义节点：为 int/float/Vec3 等无法逐成员拆解的“原子”类型登记唯一 SaveId 与序列化器，是 DefinitionContext 识别基本类型的依据。"
---
# BasicTypeDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `internal class BasicTypeDefinition : TypeDefinitionBase`
**基类：** [TypeDefinitionBase](../TypeDefinitionBase)
**源文件：** `TaleWorlds.SaveSystem/Definition/BasicTypeDefinition.cs`

## 概述

`BasicTypeDefinition` 是“基础类型（basic type）”在定义上下文中的节点。所谓基础类型，是指 `int`、`float`、`string`、`Vec3`、`MatrixFrame` 这类**不能再拆成成员、必须整体交给一个序列化器一次性读出/写入**的值类型或密封类型。它继承自 [TypeDefinitionBase](../TypeDefinitionBase)，自身只多带一个 `IBasicTypeSerializer` 引用：构造时把 CLR `Type`、全局 `SaveId` 与具体序列化器绑在一起。日常 mod 开发从不直接接触它——它由引擎内部的 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes` 阶段通过 `AddBasicTypeDefinition` 批量登记；你写的 `[SaveableField]` 若引用了这些类型，序列化器正是凭这里登记的 `Serializer` 把值转成字节。

## 心智模型

- **是什么：** 一个轻量定义节点，把“某 CLR 类型”映射到“一个 `SaveId` + 一个 `IBasicTypeSerializer`”，告诉存档系统“这个类型整体用它自己的序列化器处理”。
- **何时用：** 它处在保存系统的**类型定义层（Foundation）**。只有当你要扩展存档支持一种全新的原子类型（例如自定义数学结构体），并准备自己实现 `IBasicTypeSerializer` 时，才需要关心它；绝大多数 mod 只消费已登记的基础类型。
- **何时不要用：** 不要用它来“包裹”一个可以逐字段序列化的普通类——那种类型应走 `[SaveableRootClass]` + `[SaveableField]` + [SaveableTypeDefiner](../SaveableTypeDefiner) 的常规路径，而不是注册成 basic type。
- **谁创建/持有：** 由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 创建，持有在全局 [DefinitionContext](../DefinitionContext) 的基础类型表里；mod 与 runtime 都只读它，不 new 它。
- **处在哪一层：** 定义层。它不参与对象图遍历，只在 [ArchiveSerializer](../ArchiveSerializer) 需要把一个基础类型字段写成字节时被查表命中。

## 何时使用 / 何时不要使用

适合（理解层面）：

- 排查“为什么我的 `Vec3`/`MatrixFrame` 字段能正常存读”——因为它们已在 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 中以 `SaveId 11 / 16` 等登记为 `BasicTypeDefinition`。
- 自研一种全新的原子值类型，需要让存档系统认识它。

不适合 / 危险：

- **不要为引用类型或带对象身份的类注册 basic type。** 基础类型没有对象身份（按值整体读写），类实例需要 `ObjectSaveData` 引用机制，二者不可混用。
- **不要手改 `SaveId`。** 基础类型的 `SaveId`（`1`=int、`7`=float、`21`=string……）是引擎发布的 schema，改动会破坏与已存档的兼容。
- **不要自己 `new BasicTypeDefinition`。** 它经由 definer 登记进上下文，绕过 definer 直接构造不会进入任何可查询的表。

## 依赖图

- [TypeDefinitionBase](../TypeDefinitionBase) —— 提供 `SaveId`、`Type`、`TypeLevel` 公共定义字段。
- [IBasicTypeSerializer](../IBasicTypeSerializer) —— 真正执行基础类型字节读写的接口；`BasicTypeDefinition` 持有它的实例。
- [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) —— 创建并登记所有内置 `BasicTypeDefinition` 的源头。
- [DefinitionContext](../DefinitionContext) —— 持有这些定义节点，供序列化阶段查表。
- [ArchiveSerializer](../ArchiveSerializer) —— 在写字段时按类型查到 `BasicTypeDefinition` 并调用其 `Serializer`。

## 风险

- **漏登记基础类型** → 某字段类型在 [DefinitionContext](../DefinitionContext) 中查不到 basic definition，`CheckSaveableTypes` 会报告缺失类型，保存直接失败。
- **自研序列化器写错字节布局** → 存档能落盘但读档时字段错乱甚至崩溃；basic type 是“按值整体读写”，没有成员级校验兜底。
- **复用官方 `SaveId`** → 与内置基础类型冲突，定义上下文报重复类型，[SaveManager](../SaveManager) 的保存返回失败结果。
- **跨版本改动序列化格式** → 旧档用旧字节布局，新代码读出来是垃圾值；基础类型编号必须跨版本稳定。

## 成员说明

### 属性 `Serializer`（`IBasicTypeSerializer`，只读）

构造时注入的具体序列化器。`ArchiveSerializer` 在序列化这个基础类型字段时调用它把对象转字节、读档时再调它还原。mod 不应在运行期替换它——定义上下文在 `InitializeGlobalDefinitionContext` 时就已经按初始值建好。

### 构造参数 `type` / `saveId` / `serializer`

`BasicTypeDefinition(Type type, int saveId, IBasicTypeSerializer serializer)` 把三者绑定：CLR 类型、`SaveId`（经 `new TypeSaveId(saveId)` 包装）、序列化器。构造即把 `Type`、`SaveId` 交给基类 [TypeDefinitionBase](../TypeDefinitionBase)，并算出 `TypeLevel`。

## 示例

模组侧通常只负责触发一次保存；引擎在初始化定义上下文时会把 `int`、`float`、`Vec3` 等登记为 `BasicTypeDefinition`，序列化器据此把根对象图里的这些字段整体写成字节：

```csharp
// 引擎内部（SaveableBasicTypeDefiner.DefineBasicTypes）登记基础类型：
//   AddBasicTypeDefinition(typeof(int), 1, new IntBasicTypeSerializer());
//   AddBasicTypeDefinition(typeof(Vec3), 13, new Vec3BasicTypeSerializer());

// 模组侧：以 Game 为根触发保存，字段里的 Vec3 / int 由上述定义支撑：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：`BasicTypeDefinition` 本身由引擎管理，模组不应自行构造；若你的自定义字段类型是全新的原子值类型，才需要像 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 那样扩展 definer 并登记 `IBasicTypeSerializer`。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeDefinitionBase](../TypeDefinitionBase) · [IBasicTypeSerializer](../IBasicTypeSerializer) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [DefinitionContext](../DefinitionContext) · [ArchiveSerializer](../ArchiveSerializer) · [SaveManager](../SaveManager)
