---
title: "PropertyDefinition"
description: "属性成员的存档定义：把被 [SaveableProperty] 标记的属性反射信息、getter/setter 与稳定 MemberTypeId 收敛为 MemberDefinition 子类，并要求属性必须有可读写访问器，否则定义阶段即抛异常。"
---
# PropertyDefinition

**命名空间：** TaleWorlds.SaveSystem.Definition
**模块：** TaleWorlds.SaveSystem
**类型：** `public class PropertyDefinition : MemberDefinition`
**基类：** [MemberDefinition](../MemberDefinition)
**源文件：** `TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs`

## 概述

`PropertyDefinition` 代表一个被 `[SaveableProperty]` 标记的**属性（property）**在定义上下文中的节点。它继承自 [MemberDefinition](../MemberDefinition)，构造时除了保存 `PropertyInfo` 与 `[SaveableProperty]` 属性，还会解析出 `GetMethod` / `SetMethod`（getter/setter），并带一个可选的 `GetPropertyValueDelegate`（代码生成场景）。与 [FieldDefinition](../FieldDefinition) 最大的不同是：**属性必须有 getter 和 setter**，否则构造阶段会 `Debug.FailedAssert` 并直接 `throw new Exception`——因为存档既要能“读出”也要能“写回”该属性。它的 `GetMemberType()` 返回 `PropertyType`，`GetValue(target)` 走注入委托或 `GetMethod.Invoke`。

## 心智模型

- **是什么：** 属性级存档定义，把属性反射信息、访问器与方法编号打包，让序列化器能读能写属性值。
- **何时用：** 处在保存系统的**类型定义层（成员级）**。当你给可存档类的属性贴 `[SaveableProperty(id)]` 时生成；适合需要 getter/setter 语义（如计算属性、校验）的持久化数据。
- **何时不要用：** 不要给只有 getter 或只有 setter 的属性贴 `[SaveableProperty]`——定义阶段会直接抛异常；只读数据应改为字段（`[SaveableField]`）或提供私有 setter。也不要用它处理字段（用 [FieldDefinition](../FieldDefinition)）。
- **谁创建/持有：** 由 [SaveableTypeDefiner](../SaveableTypeDefiner) 反射扫描 `[SaveableProperty]` 生成，持有在所属类定义成员表中；运行期只读。
- **处在哪一层：** 定义层（校验访问器）+ 序列化层（读 `GetValue` / 写 `SetMethod`）。`GetValue` 在保存时被 [ArchiveSerializer](../ArchiveSerializer) 调用，读档时由 deserializer 调 `SetMethod` 回填。

## 何时使用 / 何时不要使用

适合：

- 给可存档类的**可读写属性**加 `[SaveableProperty(id)]`，让它与 `Game` 一起随存档读写。
- 需要属性访问器做换算（如存储为内部单位、对外暴露友好单位）的持久化字段。

不适合 / 危险：

- **只读/只写属性贴 `[SaveableProperty]`** → 构造即 `throw`，导致整个 definer 初始化失败，[SaveManager](../SaveManager) 保存直接失败。务必提供 `private set` 至少。
- **两个属性共用同一 `id`** → 成员错位，隐蔽坏档。
- **属性类型未登记** → 保存/加载抛异常。
- **getter 有副作用或抛异常** → `GetValue` 在保存时被调用，会污染或中断存档。

## 依赖图

- [MemberDefinition](../MemberDefinition) —— 父类，提供 `Id`/`MemberInfo` 与 `GetValue` 抽象契约。
- [SaveablePropertyAttribute](../SaveablePropertyAttribute) —— 构造时读取的 Attribute，标志该属性可被持久化。
- [MemberTypeId](../MemberTypeId) —— 属性稳定编号的类型。
- [SaveableTypeDefiner](../SaveableTypeDefiner) —— 反射生成 `PropertyDefinition` 的源头。
- [ArchiveSerializer](../ArchiveSerializer) —— 保存时通过 `GetValue` 读属性；[ArchiveDeserializer](../ArchiveDeserializer) 读档时调 `SetMethod` 回填。

## 风险

- **属性缺 setter** → 构造阶段 `Debug.FailedAssert` 并抛 `Exception("Property ... does not have setter method.")`，定义上下文初始化失败，保存无法进行。
- **属性缺 getter** → 同样抛 `Exception("... does not have getter method.")`。
- **`id` 重复或跨版本变更** → 成员错位/坏档；编号须稳定且类型内唯一。
- **`GetValue` 委托或 getter 异常** → 中断保存；应是纯读取、稳定返回当前值。
- **属性类型未登记** → 在 [DefinitionContext](../DefinitionContext) 查不到定义，保存/加载失败。

## 成员说明

### 属性 `PropertyInfo`（`PropertyInfo`，只读）

被标记属性的反射信息，序列化器据此取类型与读写访问器。

### 属性 `SaveablePropertyAttribute`（`SaveablePropertyAttribute`，只读）

构造时读取到的 Attribute 实例，记录持久化元信息（主要是 `id`）。

### 属性 `GetMethod` / `SetMethod`（`MethodInfo`，只读）

解析出的 getter / setter。构造时若当前类型拿不到 `SetMethod`，会回溯 `DeclaringType` 去拿；若仍然为 `null` 则断言失败并抛异常——**属性必须可读写**。`GetMethod` 同理。

### 属性 `GetPropertyValueMethod`（`GetPropertyValueDelegate`，只读）

可选快速取值委托，由 `InitializeForAutoGeneration` 注入；为 `null` 时 `GetValue` 退回 `GetMethod.Invoke`。

### 方法 `GetMemberType()`

返回 `PropertyInfo.PropertyType`，序列化器据此选择类型定义写值。

### 方法 `GetValue(object target)`

从 `target` 取出属性值：优先调注入委托，否则 `GetMethod.Invoke(target, new object[0])`。保存时读取属性当前值的统一入口。

### 方法 `InitializeForAutoGeneration(GetPropertyValueDelegate)`

注入快速取值委托，供自动生成代码绕开反射。普通 mod 不需调用。

## 示例

模组侧标注可读写属性并触发保存；引擎在定义阶段校验访问器、生成 `PropertyDefinition`，遍历时通过 `GetValue` 读值、读档时通过 `SetMethod` 回填：

```csharp
// 模组可存档类的属性（必须有 getter 与 setter，否则定义阶段抛异常）：
[SaveableRootClass(910001)]
public class MyModState
{
    [SaveableProperty(1)] public int RaidCount { get; set; }
    [SaveableProperty(2)] public string Tag { get; private set; }
}

// 以 Game 为根触发保存，上述属性经 PropertyDefinition 收集并写回：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

注意：`[SaveableProperty]` 的属性必须同时有 `get` 和 `set`（至少 `private set`），缺失会在定义初始化时直接抛异常，使保存彻底失败。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[MemberDefinition](../MemberDefinition) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [FieldDefinition](../FieldDefinition) · [MemberTypeId](../MemberTypeId) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
