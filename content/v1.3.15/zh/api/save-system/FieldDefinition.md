---
title: "FieldDefinition"
description: "字段成员的存档定义：把被 [SaveableField] 标记的字段反射信息、稳定 MemberTypeId 与取值方式收敛为 MemberDefinition 的子类，是存档系统从实例读取字段值的统一入口。"
---
# FieldDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `public class FieldDefinition : MemberDefinition`
**基类：** [MemberDefinition](../MemberDefinition)
**源文件：** `TaleWorlds.SaveSystem/Definition/FieldDefinition.cs`

## 概述

`FieldDefinition` 代表一个被 `[SaveableField]` 标记的**字段（field）**在定义上下文中的节点。它继承自 [MemberDefinition](../MemberDefinition)，在构造时保存 `FieldInfo`、`[SaveableField]` 属性本身，并可持有可选的 `GetFieldValueDelegate`（用于代码生成场景下的快速取值）。它的 `GetMemberType()` 直接返回字段的 `FieldType`；`GetValue(target)` 优先调用注入的取值委托，否则退回 `FieldInfo.GetValue(target)`。它是保存系统遍历对象图时，从实例上读取“某个被持久化字段当前值”的标准通道——你写的 `[SaveableField(1)] public int RaidCount` 就对应一个 `FieldDefinition`。

## 心智模型

- **是什么：** 字段级存档定义，把“字段反射信息 + 成员编号 + 取值方式”打包，让序列化器对字段与属性一视同仁地取值。
- **何时用：** 处在保存系统的**类型定义层（成员级）**。你定义可存档类时给字段贴 `[SaveableField(id)]`，引擎便据此生成 `FieldDefinition`。需要理解“字段如何被读出”或排查“字段没存进去”时，看它就对了。
- **何时不要用：** 不要用它处理属性（属性用 [PropertyDefinition](../PropertyDefinition)，要求有 getter/setter）；也不要用它承载对象身份/容器（那是 [TypeDefinitionBase](../TypeDefinitionBase) / [ContainerDefinition](../ContainerDefinition) 的职责）。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 反射扫描 `[SaveableField]` 生成，持有在所属类定义的成员表中；运行期只读。
- **处在哪一层：** 定义层。`GetValue` 在序列化阶段被 [ArchiveSerializer](../ArchiveSerializer) 调用，逐实例取出字段值。

## 何时使用 / 何时不要使用

适合：

- 给自定义数据类的字段加 `[SaveableField(id)]`，让它与 `Game` 一起随存档读写（通过 [IDataStore](../../campaign-ext/IDataStore) 或根类）。
- 理解字段取值时机：`GetValue` 在 `SaveManager.Save` 遍历对象图时被调用，是只读读取。

不适合 / 危险：

- **不要两个字段共用同一 `id`。** 同类型内 `MemberTypeId` 必须唯一，重复会让字段互相覆盖。
- **不要让字段类型不可序列化。** 字段类型若没有对应定义（basic type、类定义或容器定义），`CheckSaveableTypes` 报警或保存时抛异常。
- **不要在 `GetFieldValueMethod` 委托里做有副作用的事。** 取值应是纯读取，污染对象图会导致存档状态错乱。
- **不要依赖字段声明顺序当编号。** 始终显式指定 `id`。

## 依赖图

- [MemberDefinition](../MemberDefinition) —— 父类，提供 `Id`/`MemberInfo` 与 `GetValue` 抽象契约。
- [SaveableFieldAttribute](../SaveableFieldAttribute) —— 构造时读取的 Attribute，标志该字段可被持久化。
- [MemberTypeId](../MemberTypeId) —— 字段稳定编号的类型。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 反射生成 `FieldDefinition` 的源头。
- [ArchiveSerializer](../ArchiveSerializer) —— 遍历对象图时通过 `GetValue` 读取字段值。

## 风险

- **`id` 重复或跨版本变更** → 字段错位或隐蔽坏档；成员编号须跨版本稳定且类型内唯一。
- **字段类型未登记** → 在 [DefinitionContext](../DefinitionContext) 查不到定义，保存/加载失败。
- **注入的取值委托异常** → `GetValue` 抛错会中断整个保存；委托应稳定返回字段当前值。
- **字段为 `null` 且类型无 null 处理** → 引用类型字段为 `null` 时，序列化走对象引用的“空引用”分支，需确保加载侧能正确还原 `null`。

## 成员说明

### 属性 `FieldInfo`（`FieldInfo`，只读）

被标记字段的反射信息，构造时保存，序列化器据此取类型与反射读值。

### 属性 `SaveableFieldAttribute`（`SaveableFieldAttribute`，只读）

构造时通过 `GetCustomAttribute<SaveableFieldAttribute>` 读取到的 Attribute 实例，记录该字段的持久化元信息（主要是 `id`）。

### 属性 `GetFieldValueMethod`（`GetFieldValueDelegate`，只读）

可选的快速取值委托，由 `InitializeForAutoGeneration` 注入（代码生成场景）。为 `null` 时 `GetValue` 退回普通反射。

### 方法 `GetMemberType()`

返回 `FieldInfo.FieldType`——序列化器据此选择对应的类型定义来写字段值。

### 方法 `GetValue(object target)`

从 `target` 取出该字段值：若 `GetFieldValueMethod` 非空则调用它，否则 `FieldInfo.GetValue(target)`。这是保存时读取字段当前值的统一入口。

### 方法 `InitializeForAutoGeneration(GetFieldValueDelegate)`

注入快速取值委托，供自动生成的保存代码绕开反射、直接读字段。普通 mod 不需调用。

## 示例

模组侧只标注字段并触发保存；引擎在定义阶段生成 `FieldDefinition`，遍历对象图时通过 `GetValue` 读取字段值：

```csharp
// 模组定义可存档类的字段（引擎据此生成 FieldDefinition）：
[SaveableRootClass(910001)]
public class MyModState
{
    [SaveableField(1)] public int RaidCount { get; set; }
    [SaveableField(2)] public string Tag { get; set; }
}

// 以 Game 为根触发保存，上面两个字段经 FieldDefinition 收集并写出：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：`id` 必须为类型内唯一且跨版本稳定；字段类型需已被存档系统认识（基础类型或已登记的类/容器）。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[MemberDefinition](../MemberDefinition) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [MemberTypeId](../MemberTypeId) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [ArchiveSerializer](../ArchiveSerializer) · [SaveManager](../SaveManager)
