---
title: "SaveablePropertyAttribute"
description: "Bannerlord 存档系统特性：标记可存档类中的某个属性（get/set）参与序列化，并用 LocalSaveId 赋予它在保存容器内的稳定本地编号。"
---
# SaveablePropertyAttribute

**Namespace:** TaleWorlds.SaveSystem  
**Module:** TaleWorlds.SaveSystem  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Base:** `Attribute`  
**File:** `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## 概述

`SaveablePropertyAttribute` 是 `[AttributeUsage(AttributeTargets.Property)]` 的 .NET 特性，**只能贴在属性上**（贴在字段、类或方法上不生效，也不会被存档系统收集）。当某个类已被 `SaveableTypeDefiner` 注册为可存档类型后，系统会反射扫描该类实例属性，凡是带 `[SaveableProperty(id)]` 的属性，其 getter 的返回值会在保存时写出、其 setter 会在读档时被赋值。

它和 `SaveableFieldAttribute` 是同一套机制的两端：后者标记**字段**、前者标记**属性**。两者的 `LocalSaveId` 语义完全一致——都是一个 `short` 类型的、在「声明该属性的类」范围内稳定且唯一的本地存档编号。

## 心智模型

把 `[SaveableProperty(id)]` 理解为**属性级存档开关 + 稳定编号**：

- **它解决什么问题**：可存档类的状态可能分散在字段和属性里，其中属性（尤其是带封装逻辑的 `get; private set;`）才是对外暴露、需要持久化的那部分。这个特性让属性像字段一样参与序列化。
- **谁读取它**：不是你在运行时去读这个特性，而是 `TypeDefinition.CollectProperties()` 在「构建存档定义（definition）」阶段通过反射取出它，生成一个 `PropertyDefinition`；随后 `SaveManager.Save` / 读档调用 `PropertyDefinition.GetValue`（= 反射调用 getter）和 setter 完成真值的往返。
- **编号怎么用**：保存键是 `MemberTypeId = (classLevel, LocalSaveId)`。`classLevel` 由 `TypeDefinitionBase.GetClassLevel(声明类型)` 决定（类型在继承链中的深度：基类层级低、派生类层级高）。因此**同一个声明类内部的 `LocalSaveId` 必须互不相同**，但基类与派生类可以各自使用相同的数字而不冲突。
- **它和字段级的区别**：`SaveableFieldAttribute` 收集 `FieldDefinition`，`SaveablePropertyAttribute` 收集 `PropertyDefinition`。属性必须有可访问的 getter **和** setter（否则 `PropertyDefinition` 构造时会 `Debug.FailedAssert` 并抛异常，该类将无法注册）；字段则无此约束。

> 一句话职责（去掉类名也能懂）：**“把这个属性当作存档数据，并用一个稳定编号标识它在保存流里的位置。”**

## 何时用 / 何时不要用

**用它的场景**
- 你有一个**已被注册的可存档类**（通过 `SaveableTypeDefiner.AddClassDefinition` / `AddRootClassDefinition` / `ConstructContainerDefinition` 注册），且其中某个**属性**承载需要持久化的状态，例如 `Army.Cohesion`、`Army.ArmyOwner`、`Campaign` 上的各种状态属性。
- 该属性是**纯状态**：getter 直接返回内部值，setter 直接赋值，没有游戏逻辑副作用。
- 你希望该属性参与存档编号体系（与 `SaveableField` 并列），并保持与官方类型一致的 `[SaveableProperty(id)]` 风格。

**不要用它的场景**
- 要标记的是**字段**而非属性 → 改用 [`SaveableFieldAttribute`](../SaveableFieldAttribute/)。
- 属性是**只读计算值**（如 `Army.DailyCohesionChange` 由模型实时算出）→ 它不是状态，**绝不要**打标签，否则保存时没有可写回的目标，徒增噪音。
- 属性的 **setter 有副作用**（如 `Army.Kingdom` 的 setter 会增删子集合、触发事件）→ 读档时反序列化会执行这些副作用，污染状态甚至导致重复注册/断言失败。应把标签打到无副作用的底层字段，或在 setter 中判断 `_isLoading` 跳过副作用。
- 类本身没被注册成可存档类型 → 打了特性也不会被收集，纯属无效。
- 属性只有 get 或只有 set → `PropertyDefinition` 会因找不到对应方法而抛异常，注册失败。

## 依赖关系

```text
SaveableTypeDefiner ──AddClassDefinition / ConstructContainerDefinition──▶ TypeDefinition
SaveablePropertyAttribute ──被反射读取──▶ TypeDefinition
        │                                          │
        │ CollectProperties 生成                    │ getter/setter 读写真值
        ▼                                          ▼
   PropertyDefinition ─────────────────────────▶ SaveManager ──Save / Load 编排──▶ ContainerDefinition
SaveableFieldAttribute ──字段级同类机制──▶ TypeDefinition
```

- **上游（谁注册 / 谁读取）**
  - [`SaveableTypeDefiner`](../SaveableTypeDefiner/) — 在 `DefineClassTypes()` 中用 `AddClassDefinition` / `AddRootClassDefinition` 注册类，或用 `ConstructContainerDefinition` 注册容器；注册后本特性才会被收集。
  - [`TypeDefinition`](../TypeDefinition/) — `CollectProperties()` 反射扫描带本特性的属性，结合 `classLevel` 与 `LocalSaveId` 生成 `MemberTypeId`。
  - [`PropertyDefinition`](../PropertyDefinition/) — 持有 getter/setter 委托，提供 `GetValue`/赋值。
- **同级（同类机制）**
  - [`SaveableFieldAttribute`](../SaveableFieldAttribute/) — 字段级等价物；优先用于无副作用的纯字段。
- **下游（被谁消费）**
  - [`SaveManager`](../SaveManager/) — `Save` / `Load` 真正驱动序列化与反序列化，并在收集阶段扫描本特性以发现「属性类型」是否需要额外定义。
  - [`ContainerDefinition`](../ContainerDefinition/) — 容器（根对象，如 `Campaign`）的保存容器，承载其下所有属性/字段的往返。

## 风险与防坏档

> 存档兼容性的核心规则：**保存按 `LocalSaveId` 寻址，不按属性名。** 因此「改名安全、改号危险」。

1. **改 `LocalSaveId` 会破坏旧档。** 读档用同一个 `LocalSaveId` 定位成员。若把某属性的编号从 `3` 改成 `5`，旧档中 `id=3` 处写入的值会被错误还原到新 `id=5` 的成员，或因为找不到对应成员而丢失/报错。
2. **重排 / 给别的属性复用旧号会坏档。** 新增属性请使用该类内**从未占用过**的新号；删除属性时，让它的旧号**永久空缺**，绝不要再分配给别的属性，否则旧档会把陈旧的脏数据填进新成员。
3. **重命名属性名是安全的**（保存不依赖名字），但前提是 `LocalSaveId` 保持不变、且类型往返一致。
4. **getter / setter 必须纯净。** 保存时调用 getter 取值，读档时调用 setter 赋值。带副作用的 setter 在读档阶段执行会污染状态（`Army.Kingdom` 即是反例：它改子集合，所以没打标签）。计算属性（`Army.DailyCohesionChange`）不是状态，绝不要标记。
5. **特性驱动 vs `ISyncData`/`SyncData` 手动存档二选一。** 若你的类同时用 `SyncData` 手动读写同一份状态、又用 `[SaveableProperty]` 声明它，会造成双重保存与字段冲突。选一种机制即可。
6. **必须有 getter 和 setter。** `PropertyDefinition` 在构建定义时若找不到二者之一，会 `FailedAssert` 并抛异常，整个类注册失败，进而连锁影响依赖它的存档流程。

**防坏档清单**：新增用新号；删号留空不复用；改名随意但保号；setter 零副作用；不要和 `SyncData` 混用。

## 成员说明

### 构造函数 `SaveablePropertyAttribute(short localSaveId)`

| 参数 | 类型 | 含义 | 副作用 / 何时生效 |
|------|------|------|-------------------|
| `localSaveId` | `short` | 该属性在「声明它的类」范围内的**本地存档编号**。保存键 = `(classLevel, localSaveId)`。 | 仅作为元数据，运行时无副作用；它在 `TypeDefinition.CollectProperties()` 构建存档定义时被读取，决定该属性在存档流中的寻址编号。一旦发布到旧档，请勿更改。 |

- **公开属性 `LocalSaveId`（`short`，可读写）**：即构造时传入的编号，构建定义后一般不再修改。
- **没有 `CustomSaveId` 成员**——文档与代码中均称为 `LocalSaveId`，是「本地（类内）保存编号」之意。
- **应用位置**：只能贴在 `Property` 上（`AttributeTargets.Property`）。贴在字段/类/方法上不会被收集。

## 最小真实示例

### 示例 1：自定义可存档类 + `SaveableTypeDefiner` 注册

```csharp
using System;
using TaleWorlds.SaveSystem;

// 状态属性：有 getter + setter，且 setter 无副作用 → 打 [SaveableProperty]
public class BannerTracker
{
    [SaveableProperty(1)]
    public string BannerId { get; set; }

    [SaveableProperty(2)]
    public int DisplayOrder { get; set; }

    // 注意：带副作用的 setter 不要标记，否则读档时会污染状态
    private int _factionColor;
    public int FactionColor
    {
        get => _factionColor;
        set
        {
            if (value == _factionColor) return;
            _factionColor = value;
            // 副作用逻辑只在实际游戏运行时发生，读档阶段不应触发
        }
    }

    // 计算属性：不是状态，绝不要标记
    public int EffectiveColor => _factionColor;
}

// 在 SaveableTypeDefiner 派生类里注册该类（这一步是特性被收集的前提）
public class MyModSaveDefiner : SaveableTypeDefiner
{
    public MyModSaveDefiner(int saveBaseId) : base(saveBaseId) { }

    protected override void DefineClassTypes()
    {
        // 1001 是该类全局唯一的类型 saveId；属性上的 LocalSaveId 只在该类内唯一
        AddClassDefinition(typeof(BannerTracker), 1001);
    }
}
```

### 示例 2：来自源码的 `Army`（对比「标记 vs 不标记」）

真实 `TaleWorlds.CampaignSystem.Army` 这样使用本特性，正好体现心智模型：

```csharp
// 纯状态属性 → 标记，编号在 Army 类内唯一
[SaveableProperty(3)]
public ArmyTypes ArmyType { get; set; }

[SaveableProperty(4)]
public Hero ArmyOwner { get; set; }

[SaveableProperty(5)]
public float Cohesion { get; set; }

[SaveableProperty(13)]
public float Morale { get; private set; }

[SaveableProperty(14)]
public MobileParty LeaderParty { get; private set; }

[SaveableProperty(17)]
public TextObject Name { get; private set; }

// 反例：Kingdom 的 setter 会增删子集合、触发事件 → 不标记，改用字段保存
public Kingdom Kingdom
{
    get => _kingdom;
    set
    {
        if (value != _kingdom)
        {
            _kingdom?.RemoveArmyInternal(this);
            _kingdom = value;
            _kingdom?.AddArmyInternal(this);
        }
    }
}

// 反例：DailyCohesionChange 由模型实时算出 → 不是状态，不标记
public float DailyCohesionChange
    => Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this).ResultNumber;
```

真正驱动序列化的是 `SaveManager`（游戏在存/读档时调用；自定义根对象也可手动触发）：

```csharp
// 由 SaveManager 编排保存；属性 getter/setter 在背后被调用
SaveManager.Save(myRootObject, metaData, "MyModSave", driver);
```

## 跨版本提示

- **v1.3.15 与 v1.4.5 一致**：`SaveablePropertyAttribute` 的声明、`LocalSaveId` 字段与 `SaveablePropertyAttribute(short)` 构造函数在两个版本中完全相同；`TypeDefinition.CollectProperties()` 的收集逻辑、`MemberTypeId = (classLevel, LocalSaveId)` 的寻址方式也一致。本页语义以 `bannerlord-1.4.5` 源码为准，可直接用于 v1.3.15 的 mod 编写。
- 注意：本特性**只影响存档容器内的寻址编号**，与序列化器（`ArchiveSerializer` / `ArchiveDeserializer`）的具体字节格式无关。

## 参见

- ↑ 父级：[save-system 目录](../)
- ↔ 同级：[SaveableFieldAttribute](../SaveableFieldAttribute/) — 字段级等价物，优先用于纯字段
- 相关：[SaveableTypeDefiner](../SaveableTypeDefiner/) — 注册可存档类的入口
- 相关：[SaveManager](../SaveManager/) — 真正驱动 Save / Load 的静态 API
- 相关：[TypeDefinition](../TypeDefinition/) — 反射读取本特性并生成 `MemberTypeId`
- 相关：[PropertyDefinition](../PropertyDefinition/) — 持有属性的 getter/setter 委托
- 相关：[ContainerDefinition](../ContainerDefinition/) — 容器（根对象）的保存容器
