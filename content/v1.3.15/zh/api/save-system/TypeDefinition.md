---
title: "TypeDefinition"
description: "存档类型 schema：在收集阶段扫描带 Saveable 标记的字段/属性与初始化回调，记录成员定义、错误与对象解析器，是 SaveContext 与 LoadContext 读写对象时查表的根依据。"
---

# TypeDefinition

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class TypeDefinition : TypeDefinitionBase`
**基类/Base：** `TypeDefinitionBase`
**源文件路径/Source：** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

## 一句话职责

为某一个可存档类型建立「序列化 schema」：登记它的字段/属性成员、初始化与晚初始化回调、错误清单，以及可选的 `IObjectResolver`，供保存与加载两侧按编号读写。

## 心智模型

`TypeDefinition` 是一张「某一类型的存档说明书」：当 [DefinitionContext](../DefinitionContext) 在 `FillWithCurrentTypes` 阶段为程序集中每个带 Attribute 的类型建立它时，会调用 `CollectProperties` / `CollectFields` 反射扫描 `SaveablePropertyAttribute` / `SaveableFieldAttribute`，把每个成员变成带 `MemberTypeId`（`classLevel` + `LocalSaveId`）的 `PropertyDefinition` / `FieldDefinition` 并收进 `MemberDefinitions`；同时 `CollectInitializationCallbacks` 沿继承链收集 `[LoadInitializationCallback]` 与 `[LateLoadInitializationCallback]` 方法。它属于**定义层**，在任意一次保存/加载之前就已就绪，由 [SaveContext](../SaveContext) 与 [LoadContext](../LoadContext) 在运行时凭它查成员布局、分配 `Target`、触发回调。它持有可选 `IObjectResolver`：保存时用 `ResolveObject` 规范化引用，加载时用 `AdvancedResolveObject` 把原始对象（如按 `MBGUID` 查出的 `Hero`）替换为游戏世界里的真实实例。模组一般不直接构造它——它由引擎在收集 definer 时自动建立，你通过 [SaveableTypeDefiner](../SaveableTypeDefiner) 影响它的内容。

## 何时用 / 何时不要用

**理解层面使用：** 当你排查「为什么成员 LocalSaveId 冲突报错」「为什么 `[LoadInitializationCallback]` 没被调用」「为什么自定义 resolver 不生效」时。

**不要使用：**

- 不要在模组运行时 `new TypeDefinition(...)`——它由 [DefinitionContext](../DefinitionContext) 在收集 [SaveableTypeDefiner](../SaveableTypeDefiner) 时自动建立。
- 不要手动改 `MemberDefinitions` / `Errors`——成员与错误由 `Collect*` 在定义阶段决定，运行时改动会破坏编号契约。
- 不要指望它在保存中途才存在——它属于定义层，早于任何一次 `SaveManager.Save` / `Load`。

## 依赖图

- 上游建立者：[DefinitionContext](../DefinitionContext) 在收集类型时为每个 definer 登记的类型 `new TypeDefinition(...)`。
- 标记来源：[SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 提供成员 `LocalSaveId`。
- 注册入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddClassDefinition` / `AddStructDefinition` 等决定类型进入哪个 `TypeDefinition`。
- 运行消费方：[SaveContext](../SaveContext)（保存遍历）、[LoadContext](../LoadContext)（加载恢复）凭它查成员与回调。
- 解析器：[IObjectResolver](../IObjectResolver) 提供 `ResolveObject` / `AdvancedResolveObject`。

## 风险段

- **LocalSaveId 重复即记错。** `CollectProperties` / `CollectFields` 若发现同一 `MemberTypeId` 已存在，会向 `Errors` 追加「SaveId ... is already defined in type ...」——该类型定义无效，保存/加载会出问题；不要在继承链不同层级对同一 `LocalSaveId` 重复标注。
- **定义阶段早于世界初始化。** `Collect*` 只反射类型，不访问 `Campaign.Current` 或创建 `Hero`；把游戏逻辑塞进定义阶段会在启动时崩溃。
- **类型漂移坏档。** 发布后改字段类型、改 `LocalSaveId`、`classLevel` 或换 resolver，都会让旧档字节映射到错误成员；需要兼容 resolver 或「新成员 + 迁移」策略。
- **解析器非幂等风险。** `AdvancedResolveObject` 依赖 `IObjectResolver` 把存档里的原始引用换成真实 `MBObjectManager` 实例；若 resolver 查不到对象（如旧档缺该 `MBGUID`），会留下空引用，应在回调里补齐。

## 成员说明

### 标识与集合

- `List<MemberDefinition> MemberDefinitions { get; }`：该类型所有可序列化成员（属性 + 字段 + 自定义字段）的扁平列表，保存/加载遍历它来读写。
- `Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions { get; }` / `FieldDefinitions { get; }`：按成员 id 索引的属性/字段定义集合，供 `GetPropertyDefinitionWithId` / `GetFieldDefinitionWithId` 查表。
- `bool IsClassDefinition { get; }`：由 `base.Type.IsClass` 决定——区分这是类（用 `GetClassDefinition`）还是 struct（用 `GetStructDefinition`）。
- `List<CustomField> CustomFields { get; }`：由 `AddCustomField` 追加的额外字段（名称 + `saveId`），在 `CollectFields` 中一并登记。
- `IEnumerable<string> Errors { get; }`：定义阶段收集到的 `LocalSaveId` 冲突等错误，供 [DefinitionContext](../DefinitionContext) / [SaveManager](../SaveManager) 在保存前报告。
- `IEnumerable<MethodInfo> InitializationCallbacks { get; }` / `LateInitializationCallbacks { get; }`：从继承链收集到的 `[LoadInitializationCallback]` / `[LateLoadInitializationCallback]` 方法，加载恢复后由 [LoadContext](../LoadContext) 触发。
- `CollectObjectsDelegate CollectObjectsMethod { get; }`：可选的自定义对象收集委托；若非空，`ObjectSaveData.GetChildObjects` 走它而非默认成员遍历（由 `InitializeForAutoGeneration` 注入）。

### 构造与解析

- `TypeDefinition(Type type, SaveId saveId, IObjectResolver objectResolver)` / `TypeDefinition(Type type, int saveId, IObjectResolver objectResolver)`：两个构造函数，内部以 `new TypeSaveId(saveId)` 包装；初始化 `_isClass`、错误/成员/回调列表与解析器。
- `bool CheckIfRequiresAdvancedResolving(object originalObject)`：若挂了 `IObjectResolver` 则委托其 `CheckIfRequiresAdvancedResolving`，否则返回 `false`——标记该类型加载时是否需要高级解析。
- `object ResolveObject(object originalObject)`：保存时规范化引用；有 resolver 走 `IObjectResolver.ResolveObject`，否则原样返回。
- `object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`：加载时把存档原始对象替换为真实实例（如按 id 从 [MBObjectManager](../../campaign-ext/MBObjectManager) 取 `Hero`）；无 resolver 则原样返回。

### 收集与查表

- `void CollectInitializationCallbacks()`：沿继承链（到 `object` 为止）反射收集 `[LoadInitializationCallback]` 与 `[LateLoadInitializationCallback]`，按声明顺序插入到列表头部。
- `void CollectProperties()`：反射所有属性，凡带 `SaveablePropertyAttribute` 的，用其 `LocalSaveId` 与 `classLevel` 构造 `PropertyDefinition` 并加入 `MemberDefinitions`；`LocalSaveId` 冲突则记 `Errors`。
- `void CollectFields()`：反射字段（含基类私有字段），凡带 `SaveableFieldAttribute` 的构造 `FieldDefinition` 加入；随后把 `CustomFields` 里的每个自定义字段按名称取 `FieldInfo` 登记；重复 `LocalSaveId` 同样记 `Errors`。
- `void AddCustomField(string fieldName, short saveId)`：追加一个自定义字段描述（名称 + `saveId`），留待 `CollectFields` 登记。
- `PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)` / `FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)`：按成员 id 查属性/字段定义，`TryGetValue` 取不到返回 `null`。
- `void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)`：注入自定义子对象收集委托，保存到 `CollectObjectsMethod`（供 `ObjectSaveData.GetChildObjects` 使用）。

## 最小真实示例

`TypeDefinition` 由引擎在收集类型时建立；下面复刻 `DefinitionContext` 为 `MobileParty` 这类类登记成员的流程——注意 `Collect*` 只反射、不触游戏逻辑：

```csharp
// 引擎在 FillWithCurrentTypes 时为 MobileParty 建立 TypeDefinition 并登记成员：
TypeDefinition def = new TypeDefinition(typeof(MobileParty), mobilePartySaveId, resolver);
def.CollectProperties();   // 扫描 [SaveableProperty]
def.CollectFields();       // 扫描 [SaveableField]，含基类私有字段
def.CollectInitializationCallbacks();
if (def.Errors.Any())
    InformationManager.DisplayMessage(new InformationMessage(def.Errors.First()));
```

若要往这张「说明书」里加自己的类型，正确入口是写 [SaveableTypeDefiner](../SaveableTypeDefiner) 并标注成员 Attribute——不要手动 `new TypeDefinition`。

## 导航块

- 父级：[存档系统 API 索引](../)
- 同级：[ObjectSaveData](../ObjectSaveData) · [ObjectLoadData](../ObjectLoadData)
- 相关：[DefinitionContext](../DefinitionContext) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [IObjectResolver](../IObjectResolver)
