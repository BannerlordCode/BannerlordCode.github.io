---
title: "EnumDefinition"
description: "枚举类型的存档定义节点：在 TypeDefinitionBase 之上额外携带 IEnumResolver 与 HasFlags 标记，让存档系统既能按数值存储枚举、又能在新旧枚举成员变动时通过解析器做兼容映射。"
---
# EnumDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `internal class EnumDefinition : TypeDefinitionBase`
**基类：** [TypeDefinitionBase](../TypeDefinitionBase)
**源文件：** `TaleWorlds.SaveSystem/Definition/EnumDefinition.cs`

## 概述

`EnumDefinition` 是“枚举类型”在定义上下文中的节点。枚举在底层就是一个整数，但它和 `int` 不同：枚举有**命名的成员**，而跨版本时你很可能给枚举新增或重排了成员，导致旧存档里的数值对应到今天含义不同的名字。`EnumDefinition` 在 [TypeDefinitionBase](../TypeDefinitionBase) 的基础上额外持有两样东西——一个 `IEnumResolver`（负责把旧数值/旧名字映射到当前枚举成员）和一个 `HasFlags`（标记该枚举是否带 `[FlagsAttribute]`，决定序列化时是按单值还是按位组合处理）。它由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在 `DefineEnum` 阶段登记，mod 不直接 new 它。

## 心智模型

- **是什么：** 枚举类型的存档定义，记录“这个枚举类型 = 哪个 SaveId + 用哪个 `IEnumResolver` 做兼容解析 + 是不是位标志”。
- **何时用：** 它处在保存系统的**类型定义层**。当你在 `[SaveableField]`/`[SaveableProperty]` 里引用了一个 `enum` 类型，且这个枚举可能在版本间变动成员时，`IEnumResolver` 就是你的安全网。
- **何时不要用：** 对永不变化的稳定枚举，可不加 resolver（传 `null`），但**不要用它替代对普通类的处理**——枚举始终是值类型，没有对象身份。
- **谁创建/持有：** 由 mod 的 [SaveableTypeDefiner](../SaveableTypeDefiner)（通常是 `DefineEnum`/类定义登记）创建，持有在全局 [DefinitionContext](../DefinitionContext) 中；运行期只读。
- **处在哪一层：** 定义层。读档时 [ArchiveDeserializer](../ArchiveDeserializer) 按 `SaveId` 找到它，再用 `Resolver`/`HasFlags` 把字节还原成正确的枚举值。

## 何时使用 / 何时不要使用

适合：

- 你的 mod 定义了一个 `enum`，且计划在未来版本里给枚举加成员——此时通过 resolver 把旧档数值映射到新成员，避免坏档。
- 位标志枚举（如 `OptionsMask` 之类）应让 `HasFlags` 被正确识别，序列化器才能按位组合读写。

不适合 / 危险：

- **不要在枚举成员重排或删除后仍用旧 `SaveId` 且不提供 resolver。** 旧档的 `2` 可能从 `Red` 变成了 `Blue`，读出来语义错乱甚至逻辑崩溃。
- **不要把枚举当对象引用使用。** 枚举按值存储，无法像 `MBObjectBase` 那样跨对象共享身份；需要共享身份应走 [MBObjectManager](../../campaign-ext/MBObjectManager)。
- **不要手改枚举的 `SaveId`。** 它与 `TypeSaveId` 绑定，跨版本必须稳定。

## 依赖图

- [TypeDefinitionBase](../TypeDefinitionBase) —— 提供 `SaveId`、`Type`、`TypeLevel` 公共字段。
- [IEnumResolver](../IEnumResolver) —— 枚举兼容解析接口；`EnumDefinition` 在构造时持有它的实例（`HasFlags` 由 `[FlagsAttribute]` 探测）。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 创建并登记枚举定义的源头。
- [DefinitionContext](../DefinitionContext) —— 持有定义节点，供序列化/反序列化查表。
- [ArchiveDeserializer](../ArchiveDeserializer) —— 读档时据 `EnumDefinition` 还原枚举值。

## 风险

- **枚举成员变动且无解** → 旧档数值映射错误：既可能取到语义错误的成员，也可能因数值越界触发 resolver 异常，`LoadResult` 失败（坏档）。
- **`HasFlags` 识别错误** → 位组合枚举被当作单值读写，多个标志位被吞掉或错位。
- **`SaveId` 冲突或改动** → 定义上下文报重复类型或无法识别旧类型，[SaveManager](../SaveManager) 保存/加载失败。
- **resolver 抛异常未处理** → 读档直接中断，整局存档无法恢复；resolver 应返回安全的兜底成员，而不是抛错。

## 成员说明

### 字段 `Resolver`（`IEnumResolver`，只读）

构造注入的枚举解析器。读档时发现旧数值或旧名字时，由它决定映射到当前哪个枚举成员。可为 `null`（表示不做兼容映射，直接按数值/名字还原）。

### 字段 `HasFlags`（`bool`，只读）

构造时通过 `CustomAttributeExtensions.GetCustomAttribute<FlagsAttribute>(type)` 探测。为 `true` 表示这是位标志枚举，序列化器按位组合方式读写；为 `false` 按单值处理。

### 构造参数 `type` / `saveId` / `resolver`

两个重载：接受 `SaveId` 对象或 `int saveId`（内部包成 `new TypeSaveId(saveId)`）。构造即把 `Type`/`SaveId` 交给基类，并读取 `HasFlags` 与保存 `Resolver`。

## 示例

模组侧通常只触发保存；枚举定义由 definer 登记，读档时解析器负责兼容旧值：

```csharp
// 引擎/ definer 内部登记枚举（示意）：
//   AddEnumDefinition(typeof(MyFactionRelation), mySaveId, new MyRelationResolver());

// 模组侧：以 Game 为根保存，字段里的枚举经 EnumDefinition + Resolver 落盘：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：若你的枚举会在版本间增删成员，务必提供 `IEnumResolver` 并在其中把旧档数值映射到新成员；否则旧存档读出来语义会错乱。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeDefinitionBase](../TypeDefinitionBase) · [IEnumResolver](../IEnumResolver) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [DefinitionContext](../DefinitionContext) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveManager](../SaveManager)
