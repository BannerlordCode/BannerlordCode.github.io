---
title: "MemberDefinition"
description: "存档成员（字段/属性）定义的抽象基类：统一持有 MemberTypeId 与 MemberInfo，并约定 GetMemberType / GetValue 两个抽象方法，是 FieldDefinition 与 PropertyDefinition 的共同父类。"
---
# MemberDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `public abstract class MemberDefinition`
**源文件：** `TaleWorlds.SaveSystem/Definition/MemberDefinition.cs`

## 概述

`MemberDefinition` 是“可被持久化的成员（字段或属性）”在定义上下文中的抽象基类。一个可存档类型里，每个被 `[SaveableField]` 或 `[SaveableProperty]` 标记的字段/属性，最终都会对应到一个成员定义。它只做两件通用的事：用 `MemberTypeId Id` 记住这个成员的**稳定编号**，用 `MemberInfo MemberInfo` 记住它对应的反射元数据；并强制子类实现 `GetMemberType()`（返回成员的类型）和 `GetValue(target)`（从某个对象实例上取出该成员的当前值）。真正的字段/属性差异由子类 [FieldDefinition](../FieldDefinition) 与 [PropertyDefinition](../PropertyDefinition) 承担。它是保存系统在收集对象图时“逐成员读值”的统一入口。

## 心智模型

- **是什么：** 字段与属性的共同抽象——把“成员编号 + 反射信息 + 取值方式”收敛成一个统一接口，序列化器不必关心眼下是字段还是属性。
- **何时用：** 它处在保存系统的**类型定义层（成员级）**。理解它有助于排查“为什么某个成员被存/没被存”“取值时机”。你几乎不会直接 new 它，而是经由 definer 反射扫描 `[SaveableField]`/`[SaveableProperty]` 自动生成子类实例。
- **何时不要用：** 不要用它来承载“非成员”的数据（如整个对象身份、容器元素）——那些由 [TypeDefinitionBase](../TypeDefinitionBase) / [ContainerDefinition](../ContainerDefinition) 体系处理；也不要把成员编号（`Id`）当成可随意变动的东西。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 在类定义阶段通过反射构造 [FieldDefinition](../FieldDefinition)/[PropertyDefinition](../PropertyDefinition)（即它的子类），持有在对应类定义的成员表里；运行期只读。
- **处在哪一层：** 定义层。序列化阶段 [ArchiveSerializer](../ArchiveSerializer) 遍历成员时，通过 `GetValue` 取出实例上的当前值，再按成员 `Id` 写出。

## 何时使用 / 何时不要使用

适合（理解层面）：

- 排查“某成员为什么没被保存”：先确认它有没有 `[SaveableField]`/`[SaveableProperty]` 且 `Id` 唯一；成员定义正是由此生成的。
- 编写自定义取值逻辑（如 `InitializeForAutoGeneration` 注入委托）时，理解 `GetValue` 是统一取值点。

不适合 / 危险：

- **不要假设成员声明顺序即编号。** 永远用显式 `id`；成员定义以 `MemberTypeId` 为准，顺序无关。
- **不要让两个成员共享同一 `Id`。** 定义阶段或序列化会冲突，导致字段互相覆盖或坏档。
- **不要在 `GetValue` 之外自己绕过成员定义去读写字段。** 那样绕过了编号机制，存档/读档对不上。

## 依赖图

- [FieldDefinition](../FieldDefinition) —— 子类，处理字段成员的反射与取值。
- [PropertyDefinition](../PropertyDefinition) —— 子类，处理属性成员的反射与取值（要求有 getter/setter）。
- [MemberTypeId](../MemberTypeId) —— 成员稳定编号的类型；`Id` 属性即它。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 反射扫描并构造这些成员定义的源头。
- [ArchiveSerializer](../ArchiveSerializer) —— 通过 `GetValue` 取出实例值并序列化。

## 风险

- **成员 `Id` 重复** → 同类型内两个成员抢同一编号，序列化互相覆盖，读档后得到错误数据（隐蔽坏档）。
- **成员类型未登记** → `GetMemberType()` 返回的类型在 [DefinitionContext](../DefinitionContext) 查不到定义，`CheckSaveableTypes` 报警或保存/加载抛异常。
- **自定义 `GetValue` 委托有副作用** → 序列化应是只读读取；若在取值时改动对象状态，会让保存过程污染正在存档的对象图。
- **跨版本改 `Id`** → 旧档按旧编号回填，字段错位；成员编号须跨版本稳定。

## 成员说明

### 属性 `Id`（`MemberTypeId`，只读）

该成员在所属类型内部的稳定编号，来自 `[SaveableField(id)]` / `[SaveableProperty(id)]` 的 `id`。序列化与反序列化都凭它定位成员，跨版本必须稳定且类型内唯一。

### 属性 `MemberInfo`（`MemberInfo`，只读）

对应的反射元数据（字段或属性的 `FieldInfo` / `PropertyInfo`），构造时传入并保存。

### 抽象方法 `GetMemberType()`

返回该成员的类型（字段返回 `FieldType`，属性返回 `PropertyType`）。序列化器据此选择对应的类型定义来写值。

### 抽象方法 `GetValue(object target)`

从 `target` 实例上取出该成员当前值。字段直接反射读，属性走 `GetMethod.Invoke` 或注入的取值委托。它是保存时“读取对象当前状态”的统一调用点。

### 受保护构造 `MemberDefinition(MemberInfo, MemberTypeId)`

子类构造时调用，保存 `MemberInfo` 与 `Id`。不直接供 mod 使用。

## 示例

模组侧一般只标记成员；成员定义由引擎在初始化定义上下文时生成，序列化时统一取值。下面的代码展示一次保存入口，背后正是这些成员定义被遍历：

```csharp
// 引擎内部：遍历类定义的成员，逐一对实例取值并写出（示意）：
//   foreach (MemberDefinition member in classDef.Members)
//       object value = member.GetValue(rootObject);

// 模组侧：以 Game 为根触发保存，所有 [SaveableField]/[SaveableProperty] 经成员定义收集：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：成员定义本身由引擎管理；mod 只需正确标注 `[SaveableField]`/`[SaveableProperty]` 并保证 `Id` 唯一稳定，取值与编号由系统自动完成。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[FieldDefinition](../FieldDefinition) · [PropertyDefinition](../PropertyDefinition) · [MemberTypeId](../MemberTypeId) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [ArchiveSerializer](../ArchiveSerializer) · [SaveManager](../SaveManager)
