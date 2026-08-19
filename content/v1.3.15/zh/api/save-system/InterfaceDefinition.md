---
title: "InterfaceDefinition"
description: "接口类型的存档定义节点：让存档系统能序列化“接口类型字段”，在写入时记录实际具体类型、读档时把具体类型还原回接口引用，从而支持多态对象图的持久化。"
---
# InterfaceDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `internal class InterfaceDefinition : TypeDefinitionBase`
**基类：** [TypeDefinitionBase](../TypeDefinitionBase)
**源文件：** `TaleWorlds.SaveSystem/Definition/InterfaceDefinition.cs`

## 概述

`InterfaceDefinition` 是“接口类型”在定义上下文中的节点。它解决的问题是：**字段的声明类型是接口，但运行时实际是某个具体类**——例如一个 `IMyBehavior` 字段，存档时存的是 `MyBehaviorA` 的实例。接口本身不能“被实例化”，存档必须知道“这个接口引用背后到底是什么具体类型”。`InterfaceDefinition` 用 `SaveId`（经 `TypeSaveId` 或 `SaveId` 包装）把接口类型登记进上下文；配合贴在接口上的 [SaveableInterfaceAttribute](../SaveableInterfaceAttribute) 与具体类的 `[SaveableRootClass]`，序列化器在写接口字段时记录实际具体类型的 `SaveId`，读档时再据此重建具体对象并赋回接口引用。它继承自 [TypeDefinitionBase](../TypeDefinitionBase)，构造只接收 `Type` 与 `SaveId`。

## 心智模型

- **是什么：** 接口类型的存档定义，标识“某个接口可被持久化”，使多态（接口引用 ↔ 具体实现）能在存档里正确往返。
- **何时用：** 处在保存系统的**类型定义层（多态子层）**。当你的可存档类有一个接口类型字段/属性，且它的实际实现可能是多个具体类之一时，需要接口定义 + 接口 Attribute + 各实现类的 root 定义共同支撑。
- **何时不要用：** 不要用它处理“具体类字段”——具体类走 `[SaveableRootClass]` + 类定义即可，不需要接口定义；也不要把接口当成对象身份容器（共享身份走 [MBObjectManager](../../campaign-ext/MBObjectManager)）。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在登记接口（通常配合 [SaveableInterfaceAttribute](../SaveableInterfaceAttribute)）时构造，持有在全局 [DefinitionContext](../DefinitionContext)；运行期只读。
- **处在哪一层：** 定义层。序列化时 [ArchiveSerializer](../ArchiveSerializer) 遇到接口类型字段，按 `InterfaceDefinition` 记下具体实现类型；读档时 [ArchiveDeserializer](../ArchiveDeserializer) 据此重建并回填。

## 何时使用 / 何时不要使用

适合：

- 可存档类里持有 `IMyState` 这类接口字段，且实现类可能随版本/配置变化；用接口定义支持多态持久化。
- 配合 [SaveableInterfaceAttribute](../SaveableInterfaceAttribute) 给接口标 `SaveId`，并在各实现类上标 `[SaveableRootClass]`。

不适合 / 危险：

- **接口没标 `SaveId` 或实现类没标 `[SaveableRootClass]`** → 序列化不知道具体类型如何落地，读档无法重建接口引用（坏档或空引用）。
- **实现类 `SaveId` 与接口/其它类型冲突** → 定义上下文报重复类型，保存失败。
- **跨版本改接口 `SaveId`** → 旧档按旧编号找不到接口定义（坏档）。
- **滥用接口字段存大量共享对象** → 接口定义只解决“类型识别”，对象去重/共享身份仍需 [MBObjectManager](../../campaign-ext/MBObjectManager)。

## 依赖图

- [TypeDefinitionBase](../TypeDefinitionBase) —— 提供 `SaveId`/`Type`/`TypeLevel` 公共字段。
- [SaveableInterfaceAttribute](../SaveableInterfaceAttribute) —— 贴在接口上的 Attribute，提供接口 `SaveId`；`InterfaceDefinition` 与之对应。
- [SaveableRootClassAttribute](../SaveableRootClassAttribute) —— 各具体实现类的根标记，使接口引用能被还原成具体对象。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 创建并登记接口定义的源头。
- [DefinitionContext](../DefinitionContext) —— 持有接口定义，供序列化按接口类型查表。
- [ArchiveSerializer](../ArchiveSerializer) / [ArchiveDeserializer](../ArchiveDeserializer) —— 写出/重建接口引用的具体类型。

## 风险

- **接口或实现类编号缺失/冲突** → 多态引用无法落地，`LoadResult` 失败或拿到 `null` 接口（坏档）。
- **跨版本改接口 `SaveId`** → 旧档识别不到接口类型，读档失败。
- **接口字段的具体实现未被登记** → 序列化时遇到未知具体类型，查不到类定义而抛异常。
- **把“共享身份”误用接口表达** → 同一对象被多处引用时应走 [MBObjectManager](../../campaign-ext/MBObjectManager)，否则会被复制成多份、互相脱节。

## 成员说明

### 构造参数 `type` / `saveId`

两个重载：接受 `SaveId` 对象或 `int saveId`（内部包成 `new TypeSaveId(saveId)`）。构造即把接口 `Type` 与 `SaveId` 交给 [TypeDefinitionBase](../TypeDefinitionBase)。接口本身的成员不由它持有——具体类型才是真正有成员定义的一方。

### 与具体实现的关系

`InterfaceDefinition` 只标识“接口可持久化”。真正被序列化的是字段当前持有的**具体实现对象**，其类型定义（类定义）才包含成员表；接口定义负责在读档时把“重建出的具体对象”正确赋回接口引用。

## 示例

接口字段的多态持久化依赖接口定义 + 接口 Attribute + 实现类 root 定义；模组侧只触发保存：

```csharp
// 引擎/ definer 内部登记接口定义（示意）：
//   InterfaceDefinition myInterfaceDef = new InterfaceDefinition(typeof(IMyState), myInterfaceSaveId);

// 模组侧：以 Game 为根保存，接口字段里的具体实现经接口定义被正确记录与还原：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：接口类型字段若要在存档里往返，必须同时具备接口的 `SaveId`（[SaveableInterfaceAttribute](../SaveableInterfaceAttribute)）与各实现类的 `[SaveableRootClass]`，否则具体类型无法被识别与重建。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[TypeDefinitionBase](../TypeDefinitionBase) · [SaveableInterfaceAttribute](../SaveableInterfaceAttribute) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveManager](../SaveManager)
