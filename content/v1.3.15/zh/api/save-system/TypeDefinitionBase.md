---
title: "TypeDefinitionBase"
description: "所有类型定义节点（类/结构/枚举/基础/接口/泛型）的公共基类：统一持有 SaveId、CLR Type 与继承深度 TypeLevel，并提供静态的 GetClassLevel 计算，是定义上下文里“类型身份”的根。"
---
# TypeDefinitionBase

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `public class TypeDefinitionBase`
**源文件：** `TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs`

## 概述

`TypeDefinitionBase` 是存档定义层中**所有类型定义节点的公共基类**。无论类、结构、枚举、基础类型、接口还是泛型定义，最终都从它派生。它本身只承载三件与“类型身份”相关的事：`SaveId`（该类型在全局定义上下文里的稳定编号）、`Type`（对应的 CLR 类型）、`TypeLevel`（从 `object` 算起的继承深度，仅供内部排序/比较使用）。它还提供一个静态 `GetClassLevel(Type)` 来计算这个深度。换句话说，它是定义上下文里“某个可序列化类型是谁、编号多少、处于继承树的哪一层”的统一底座，所有具体定义类（如 [BasicTypeDefinition](../BasicTypeDefinition)、[FieldDefinition](../FieldDefinition) 的父链、[TypeDefinition](../TypeDefinition) 等）都站在它之上。

## 心智模型

- **是什么：** 类型定义节点的抽象底座，统一记录“类型身份三要素”——编号、CLR 类型、继承深度。
- **何时用：** 处在保存系统的**类型定义层（类型级）**。理解它有助于弄清“每个可存档类型在上下文里凭什么被唯一识别”“`TypeLevel` 影响什么”。mod 不直接 new 它，但每个你登记的类型最终都对应一个它的子类实例。
- **何时不要用：** 不要用它来承载成员级信息（那是 [MemberDefinition](../MemberDefinition) 的职责）；也不要把它当成“对象实例”的容器——它描述的是**类型 schema**，不是某次保存里的某个对象。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在各 `Define*` 阶段构造其子类（类/结构/枚举/基础/接口/泛型）并登记，持有在全局 [DefinitionContext](../DefinitionContext) 中；运行期只读。
- **处在哪一层：** 定义层。序列化/反序列化时 [ArchiveSerializer](../ArchiveSerializer)/[ArchiveDeserializer](../ArchiveDeserializer) 凭 `Type` + `SaveId` 查到正确定义节点。

## 何时使用 / 何时不要使用

适合（理解层面）：

- 排查“为什么两个类型会冲突”——因为它们共享了同一个 `SaveId`；`TypeDefinitionBase` 正是以 `SaveId` 标识类型身份。
- 理解 `TypeLevel`：序列化内部用它来比较/排序类型层级，与“对象图深度”无关。

不适合 / 危险：

- **不要改动已发布类型的 `SaveId`。** `SaveId` 是全局唯一且跨版本稳定的身份；改动会让旧档识别不到类型（坏档）。
- **不要用 `TypeLevel` 做业务判断。** 它只是内部继承深度的实现细节。
- **不要自己 `new TypeDefinitionBase`。** 始终用它的具体子类，并经由 definer 登记进上下文。

## 依赖图

- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 创建并登记各种 `TypeDefinitionBase` 子类（类/结构/枚举/基础/接口/泛型）。
- [DefinitionContext](../DefinitionContext) —— 持有这些定义节点，供序列化按 `Type`/`SaveId` 查表。
- [BasicTypeDefinition](../BasicTypeDefinition) · [EnumDefinition](../EnumDefinition) · [InterfaceDefinition](../InterfaceDefinition) —— 典型的 `TypeDefinitionBase` 子类。
- [TypeDefinition](../TypeDefinition) —— 类/结构定义基类，也继承自它（经中间层）。
- [SaveManager](../SaveManager) —— 在 `InitializeGlobalDefinitionContext` 阶段收集所有这些定义。

## 风险

- **`SaveId` 全局重复** → 定义上下文报重复类型，[SaveManager](../SaveManager) 保存/加载直接失败。
- **`SaveId` 跨版本变更** → 旧档按旧编号找不到类型，读档失败（坏档）。
- **`Type` 与 `SaveId` 不匹配** → 定义自相矛盾，序列化查表错位。
- **`GetClassLevel` 栈过长** → 极深继承链只是计算成本问题，一般无业务风险，但异常深的层级可能暴露设计问题。

## 成员说明

### 属性 `SaveId`（`SaveId`，只读）

该类型在全局定义上下文中的稳定身份编号。由构造参数 `saveId` 设定，跨版本必须全局唯一且稳定。序列化器据此在字节流里识别类型。

### 属性 `Type`（`Type`，只读）

对应的 CLR 类型，构造时保存。序列化/反序列化据此把字节与具体类型配对。

### 属性 `TypeLevel`（`byte`，只读）

从 `object` 算起的继承深度（`GetClassLevel` 的结果）。仅用于定义系统内部的层级比较/排序，与对象图深度无关。

### 受保护构造 `TypeDefinitionBase(Type type, SaveId saveId)`

保存 `Type` 与 `SaveId`，并算好 `TypeLevel`。具体子类负责补充各自专属字段（如成员表、序列化器）。

### 静态方法 `GetClassLevel(Type type)`

计算类型的继承深度：`object` 为基准（类返回 `1`，每往上一层基类 `+1`；非类类型不计继承层级，固定返回 `1`）。供构造时设定 `TypeLevel`。

## 示例

模组侧通常只触发保存；所有类型定义都由 definer 登记为 `TypeDefinitionBase` 的子类，序列化器按 `Type`/`SaveId` 查表：

```csharp
// 引擎内部：类定义节点继承自 TypeDefinitionBase，登记 SaveId 与成员（示意）：
//   class MyClassDefinition : TypeDefinitionBase { ... }

// 模组侧：以 Game 为根触发保存，Game 及其对象图里的每个类型都凭 SaveId 被识别：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：`SaveId` 全局唯一且跨版本稳定是硬性要求；mod 自定义类型的 `SaveId` 应使用官方分配或自行规划、永不复用的编号区间。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveableTypeDefiner](../SaveableTypeDefiner) · [DefinitionContext](../DefinitionContext) · [BasicTypeDefinition](../BasicTypeDefinition) · [EnumDefinition](../EnumDefinition) · [InterfaceDefinition](../InterfaceDefinition) · [TypeDefinition](../TypeDefinition) · [SaveManager](../SaveManager)
