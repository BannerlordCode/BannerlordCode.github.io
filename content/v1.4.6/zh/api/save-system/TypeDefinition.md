---
title: "TypeDefinition"
description: "存档类型定义表里的一行：记录一个 C# 类要能被存档系统认识所需的全部信息——成员列表、成员编号、读档初始化回调与对象解析器。"
---
# TypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Source:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`TypeDefinition` 是存档系统**类型定义表里的一行**：它回答「某个 C# 类要能被保存与读档认识，需要预先知道哪些东西」。它本身不是被保存的对象，而是保存动作发生之前就由 `SaveableTypeDefiner` 声明、由 `DefinitionContext` 汇总、再被保存侧与读档侧反复查询的**元数据行**。

这一行承载四类信息：

1. **身份**——`Type` 与 `SaveId`，来自基类 `TypeDefinitionBase`（`TypeDefinition.cs:12`），回答「这是哪个类、编号是多少」。
2. **内容**——`MemberDefinitions`（`TypeDefinition.cs:17`），这个类有哪些字段与属性要进存档。
3. **时机**——`InitializationCallbacks` 与 `LateInitializationCallbacks`（`TypeDefinition.cs:21`、`TypeDefinition.cs:31`），读档完成后按什么顺序回调。
4. **扩展与诊断**——`CustomFields`、`CollectObjectsMethod`、`Errors`（`TypeDefinition.cs:62`、`TypeDefinition.cs:67`、`TypeDefinition.cs:41`）。

它唯一的直接消费者是存档系统的建表与读档流程：建表期由 `DefinitionContext` 触发成员收集，读档期由 `FieldLoadData` / `PropertyLoadData` 按成员编号反查这一行里的定义。

## 心智模型

**把它当成「表里的一行」，而不是「一个运行时对象」。** 存档系统在启动阶段先把类型定义表建好；真正保存/读档时只做查表。`GetPropertyDefinitionWithId` 与 `GetFieldDefinitionWithId`（`TypeDefinition.cs:268`、`TypeDefinition.cs:276`）就是这一行的「按主键查询」入口——读档侧的 `PropertyLoadData` / `FieldLoadData` 正是用它们反查定义，并把「查不到」当作失败分支处理。

**与基类的分工。** 基类 `TypeDefinitionBase` 只提供「身份三件套」：`Type`、`SaveId`、`TypeLevel`。`TypeDefinition` 在它之上补的是**内容与生命周期**：

| 基类已有 | `TypeDefinition` 补上 |
| --- | --- |
| `Type` / `SaveId` / `TypeLevel` | 成员收集（`TypeDefinition.cs:141`、`TypeDefinition.cs:203`） |
| —— | 初始化回调收集（`TypeDefinition.cs:117`） |
| —— | 自定义字段登记（`TypeDefinition.cs:262`） |
| —— | 对象解析器转发（`TypeDefinition.cs:91`、`TypeDefinition.cs:97`、`TypeDefinition.cs:107`） |
| —— | 错误累积（`TypeDefinition.cs:41`） |
| —— | 自动生成存档代码的注入点（`TypeDefinition.cs:67`、`TypeDefinition.cs:304`） |

**编号语义（全页最关键的一点）。** 每个成员的主键是 `MemberTypeId`，由 `(classLevel, LocalSaveId)` 两段组成；其中 `classLevel` 不是随手写的，而是 `TypeDefinitionBase.GetClassLevel(成员声明类型)` 算出来的：从 `1` 起算，若该类型是 class，就沿继承链一路递增到 `object`，因此**继承层级越深，level 越大**（非 class 类型恒为 `1`）。于是：

- 「同一个 `LocalSaveId` 在父类和子类里各用一次」是**合法**的——两者的 level 不同，主键不同；
- 「同一层级里同一个 `LocalSaveId` 用两次」会被判为冲突，`CollectProperties` / `CollectFields` 会把一条错误字符串写进 `_errors`，而那个成员**不会**进入内部字典、也不会进入 `MemberDefinitions`。

**建表生命周期。** `DefinitionContext` 建表时对每一行依次调用 `CollectInitializationCallbacks()` → `CollectProperties()` → `CollectFields()`（类定义并行处理），随后把各行的 `Errors` 汇总成全局错误表。也就是说，成员收集是**一次性、建表期**完成的动作；读档期只做查询，不再重新扫描反射。

**分支差异（按源码实测）。** `TypeDefinition` 这一支只描述**类**：构造函数里取 `_isClass = Type.IsClass`，`IsClassDefinition`（`TypeDefinition.cs:51`）暴露这个判断。同目录的其它定义类型分两支：`StructDefinition` 与 `GenericTypeDefinition` **继承** `TypeDefinition`，但建表流程对结构体只调用 `CollectProperties` 与 `CollectFields`（不收集初始化回调）；`EnumDefinition`、`InterfaceDefinition`、`BasicTypeDefinition` 直接继承 `TypeDefinitionBase`，没有成员收集这一层。⇒ 「成员列表 + 成员编号 + 初始化回调」这套完整语义，只对类这一支成立。

**它不负责什么。** 不决定「哪些类型能被存」（那是 `SaveableTypeDefiner` 的声明）；不决定存档文件的字节布局（`SaveContext` 与 `ISaveDriver`）；不决定读档时对象如何重建（`LoadContext`）。它只回答：这个类的**哪些成员**、用**什么编号**、按**什么顺序**回调。

## 怎么用

### 怎么拿到

**mod 作者基本不需要自己 `new TypeDefinition`。** 正确路径是写一个 `SaveableTypeDefiner` 子类，在它的定义回调里声明类型：

- `AddClassDefinition(type, saveId, resolver)`——登记一个普通类；
- `AddRootClassDefinition(type, saveId, resolver)`——登记一个可作为存档根对象的类；
- `AddClassDefinitionWithCustomFields(type, saveId, fields, resolver)`——登记类，同时按「字段名 + 编号」补自定义字段。

这些方法内部才会构造 `new TypeDefinition(type, _saveBaseId + saveId, resolver)` 并登记进 `DefinitionContext`；之后由存档系统在建表期调用三个 `Collect*`。换句话说：**你要改的是这一行的「声明」，而不是这一行本身。**

另一条路径是「查」。`DefinitionContext` 上按 `Type` / `SaveId` 取定义的入口（`GetTypeDefinition` / `GetClassDefinition` / `TryGetTypeDefinition`）在 1.4.6 里是 `internal`，模组程序集拿不到；公开的只有 `TryGetTypeDefinition(SaveId)` 这类给冲突解析用的口子。所以不要指望「拿到 `DefinitionContext` 就能查任意类型定义」。

### 典型用法

想理解建表期到底对这一行做了什么，可以手工走一遍那三步（顺序与 `DefinitionContext` 一致）：

```csharp
using System;
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;
using TaleWorlds.SaveSystem.Resolvers;

// 场景：手工复现建表期对「一行类定义」做的三件事，并把登记结果打出来
public void CollectOneClassDefinition(IObjectResolver resolver)
{
    // 1) 建一行：类型 + 本模组命名空间内的存档编号（int 重载内部包成 TypeSaveId）
    TypeDefinition def = new TypeDefinition(typeof(MySaveableBehavior), 2001, resolver);

    // 2) 按建表顺序收集：初始化回调 -> 属性 -> 字段
    def.CollectInitializationCallbacks();
    def.CollectProperties();
    def.CollectFields();

    // 3) 登记成功的成员汇总在 MemberDefinitions；冲突则只落进 Errors，不抛异常
    foreach (MemberDefinition member in def.MemberDefinitions)
    {
        Debug.Print(member.Id + " => " + member.MemberInfo.Name, 0);
    }

    foreach (string error in def.Errors)
    {
        Debug.PrintWarning("TypeDefinition: " + error);
    }
}
```

### 坑

- **编号冲突不会立刻报错。** `CollectProperties` / `CollectFields`（`TypeDefinition.cs:141`、`TypeDefinition.cs:203`）发现重复的 `MemberTypeId` 时只往 `_errors` 追加一条字符串（形如 `SaveId {id} of property {name} is already defined in type {FullName}`），既不抛异常也不中断收集；那个成员被静默跳过（不进入内部字典，也不进入 `MemberDefinitions`）。冲突的后果因此被推迟到「读档时按编号反查定义」那一步才显现。⇒ 建表后一定要自己读 `Errors`。
- **自定义字段名写错会在收集阶段直接 NRE。** `CollectFields`（`TypeDefinition.cs:203`）解析 `CustomFields` 时用 `base.Type.GetField(name, ...)` 反射取字段，紧接着就访问 `field.DeclaringType`——中间**没有 null 检查**。字段名拼错（或改名后忘了同步）时 `GetField` 返回 null，这一行会直接抛 `NullReferenceException`，而不是留一条 `Errors`。
- **成员缺失是静默的。** `CollectProperties` 只处理带 `SaveablePropertyAttribute` 的属性，`CollectFields` 只处理带 `SaveableFieldAttribute` 的字段。漏打 attribute 的成员根本不会进入这一行，也就不会被保存——读档后它保持默认值，全程不报错。
- **`private` 字段同样会被收集。** `GetFieldsOfType`（`TypeDefinition.cs:174`）先取非 `private` 字段，再沿继承链逐层把每一层的 `private` 字段补上。所以「私有字段不会被存档」是错误认知；反过来说，**重命名或删除一个私有字段**同样会影响读档，不能因为它是 private 就随意改动。
- **结构体不走这一支的完整语义。** `StructDefinition` 虽然继承 `TypeDefinition`，但建表流程对结构体不调用 `CollectInitializationCallbacks`。如果你把「读档后修正状态」的逻辑寄托在结构体的初始化回调上，它会静静地不执行。
- **别直接改这一行。** 想让一个类进存档，去写 `SaveableTypeDefiner` + attribute；直接构造 `TypeDefinition` 只适合诊断与理解建表过程，绕过声明层会让编号基线（`_saveBaseId`）失控。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `MemberDefinitions` | `public List<MemberDefinition> MemberDefinitions { get; private set; }` | 本行登记成功的全部成员定义（属性 + 字段 + 自定义字段）的汇总列表；每成功登记一个成员就追加一条 | `TypeDefinition.cs:17` |
| `InitializationCallbacks` | `public IEnumerable<MethodInfo> InitializationCallbacks` | 带 `LoadInitializationCallback` 的方法集合，读档后调用 | `TypeDefinition.cs:21` |
| `LateInitializationCallbacks` | `public IEnumerable<MethodInfo> LateInitializationCallbacks` | 带 `LateLoadInitializationCallback` 的方法集合，读档后更晚调用 | `TypeDefinition.cs:31` |
| `Errors` | `public IEnumerable<string> Errors` | 本行在收集期产生的错误（编号冲突等），以只读集合暴露；建表后被 `DefinitionContext` 汇总 | `TypeDefinition.cs:41` |
| `IsClassDefinition` | `public bool IsClassDefinition` | 本行是否描述一个类（构造时取 `Type.IsClass`）；结构体/枚举/接口走的不是同一支 | `TypeDefinition.cs:51` |
| `CustomFields` | `public List<CustomField> CustomFields { get; private set; }` | 已登记、尚未解析成字段定义的「字段名 + 编号」对；由 `AddCustomField` 追加 | `TypeDefinition.cs:62` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; private set; }` | 自动生成存档代码时注入的对象收集委托；由 `InitializeForAutoGeneration` 写入 | `TypeDefinition.cs:67` |
| `CheckIfRequiresAdvancedResolving` | `public bool CheckIfRequiresAdvancedResolving(object originalObject)` | 有对象解析器时询问它该对象是否需要走高级解析；无解析器时返回 false | `TypeDefinition.cs:91` |
| `ResolveObject` | `public object ResolveObject(object originalObject)` | 转发给对象解析器的普通解析；无解析器时原样返回入参 | `TypeDefinition.cs:97` |
| `AdvancedResolveObject` | `public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)` | 带读档元数据与对象数据的解析；无解析器时原样返回入参 | `TypeDefinition.cs:107` |
| `CollectInitializationCallbacks` | `public void CollectInitializationCallbacks()` | 沿继承链向上扫描各层声明的方法，收集两类初始化回调，并以基类优先的顺序插入 | `TypeDefinition.cs:117` |
| `CollectProperties` | `public void CollectProperties()` | 扫描带 `SaveablePropertyAttribute` 的属性，建 `PropertyDefinition`，按 `(classLevel, LocalSaveId)` 登记；重复编号写错误 | `TypeDefinition.cs:141` |
| `GetFieldsOfType` | `private static IEnumerable<FieldInfo> GetFieldsOfType(Type type)` | 取字段的私有辅助：先出非 `private` 字段，再沿继承链逐层补 `private` 字段 | `TypeDefinition.cs:174` |
| `CollectFields` | `public void CollectFields()` | 扫描带 `SaveableFieldAttribute` 的字段，并解析 `CustomFields`，建 `FieldDefinition` 登记；重复编号写错误 | `TypeDefinition.cs:203` |
| `AddCustomField` | `public void AddCustomField(string fieldName, short saveId)` | 登记一个「字段名 + 编号」，留到 `CollectFields` 阶段按名字反射解析 | `TypeDefinition.cs:262` |
| `GetPropertyDefinitionWithId` | `public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)` | 按 `MemberTypeId` 查属性定义；查不到返回 null | `TypeDefinition.cs:268` |
| `GetFieldDefinitionWithId` | `public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)` | 按 `MemberTypeId` 查字段定义；查不到返回 null | `TypeDefinition.cs:276` |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)` | 注入自动生成的 `CollectObjects` 委托，写入 `CollectObjectsMethod` | `TypeDefinition.cs:304` |

**取舍判据**：上面 18 行覆盖了源码里带锚点的全部公开成员，并按「汇总/回调/诊断 → 解析器 → 收集 → 查询 → 代码生成注入」的顺序分组。刻意未列的：`_properties` / `_fields` / `_errors` / `_isClass` / `_objectResolver` 等私有状态（属于实现细节），以及本行之外的同族类型（`StructDefinition`、`EnumDefinition`、`FieldDefinition`、`PropertyDefinition`、`MemberTypeId`）——它们是这一行所描述内容的具体承载者，但不是这一行的成员。

## 真实示例

场景一：老存档兼容。字段上不想（或不能）打 attribute，但要按固定编号写进存档，于是走自定义字段。

```csharp
using System;
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;

// 场景：老存档兼容——字段没有 [SaveableField]，但要按固定编号进存档
public void DefineWithCustomFields()
{
    // 第三个参数是对象解析器；不需要高级解析时传 null
    TypeDefinition def = new TypeDefinition(typeof(MyLegacyBehavior), 2001, null);

    // 不走 attribute，直接按「字段名 + 编号」登记
    // 注意：字段名必须能被反射到，否则 CollectFields 会直接 NRE
    def.AddCustomField("_legacyCounter", 1);
    def.AddCustomField("_legacyOwnerId", 2);

    def.CollectProperties();
    def.CollectFields();

    // 编号撞车不会抛异常，只会在这里留下文字
    foreach (string error in def.Errors)
    {
        Debug.PrintWarning("TypeDefinition: " + error);
    }

    // 读档侧就是这样做反查的：按 MemberTypeId 取定义，取不到即失败分支
    FieldDefinition f = def.GetFieldDefinitionWithId(new MemberTypeId(2, 1));
    if (f != null)
    {
        Debug.Print("resolved field = " + f.FieldInfo.Name, 0);
    }
}
```

场景二：理解「一行定义」在一次读档里被用到的形状——按编号查定义，再交给解析器。

```csharp
using System;
using TaleWorlds.Library;
using TaleWorlds.SaveSystem.Definition;
using TaleWorlds.SaveSystem.Resolvers;

// 场景：读档时按编号反查这一行，并决定要不要走高级解析
public void UseDefinitionWhileLoading(TypeDefinition def, object loadedObject, IObjectResolver resolver)
{
    // 1) 读档侧按 MemberTypeId（层级 + 本地编号）取成员定义
    PropertyDefinition prop = def.GetPropertyDefinitionWithId(new MemberTypeId(2, 1));
    if (prop == null)
    {
        Debug.PrintError("member definition missing for this save id");
        return;
    }

    // 2) 这一行还要回答「这个对象要不要被解析器替换」
    if (def.CheckIfRequiresAdvancedResolving(loadedObject))
    {
        Debug.Print("advanced resolving required", 0);
    }
    else
    {
        // 无解析器时原样返回
        object same = def.ResolveObject(loadedObject);
    }
}
```

## 参见

- [`../SaveableTypeDefiner`](../SaveableTypeDefiner) —— 声明这一行的上层入口：`AddClassDefinition` / `AddRootClassDefinition` / `AddClassDefinitionWithCustomFields` 内部才构造 `TypeDefinition`。
- [`../DefinitionContext`](../DefinitionContext) —— 类型定义表本身：登记这一行、在建表期触发 `Collect*`、并汇总各行的 `Errors`。
- [`../SaveContext`](../SaveContext) —— 保存侧：按定义表遍历对象图、给对象与字符串编号。
- [`../LoadContext`](../LoadContext) —— 读档侧：按 `MemberTypeId` 反查成员定义并重建对象。
- [`../SaveableFieldAttribute`](../SaveableFieldAttribute) —— 让字段进入 `CollectFields` 的标记。
- [`../SaveablePropertyAttribute`](../SaveablePropertyAttribute) —— 让属性进入 `CollectProperties` 的标记。
- [`../SaveableRootClassAttribute`](../SaveableRootClassAttribute) —— 标记可作为存档根对象的类，对应 `AddRootClassDefinition` 那一支。
- [`../../campaign/CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) —— 战役行为基类，典型的需要被存档系统认识的模组扩展点。
- [`../../campaign/IDataStore`](../../campaign/IDataStore) —— 与存档同步数据的接口，常与存档类型定义配合使用。
- [`../../campaign/Campaign`](../../campaign/Campaign) —— 存档根对象所在的核心类型。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../SaveableTypeDefiner`](../SaveableTypeDefiner) · [`../DefinitionContext`](../DefinitionContext) · [`../SaveContext`](../SaveContext) · [`../LoadContext`](../LoadContext)
- 相关标记：[`../SaveableFieldAttribute`](../SaveableFieldAttribute) · [`../SaveablePropertyAttribute`](../SaveablePropertyAttribute) · [`../SaveableRootClassAttribute`](../SaveableRootClassAttribute)
- 跨桶：[`../../campaign/Campaign`](../../campaign/Campaign) · [`../../campaign/CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) · [`../../campaign/IDataStore`](../../campaign/IDataStore)
- 父索引：[`../_index`](../_index)
