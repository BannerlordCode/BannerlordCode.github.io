---
title: "SaveableFieldAttribute"
description: "贴在可存档类的字段上的特性：声明该字段参与存档序列化，并用 LocalSaveId 作为跨版本稳定的字段键，防止读档错位与坏档。"
---
# SaveableFieldAttribute

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveableFieldAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## 概述

`SaveableFieldAttribute` 是一个**只能贴在字段（field）上**的 .NET 特性。它告诉存档系统：“这个字段的当前值要随存档写入磁盘，并在读档时还原回来”。它是 Bannerlord 持久化字段数据的两个入口之一，与 `SaveablePropertyAttribute`（贴在属性上）相对。一个字段会不会被序列化，**不取决于它是否 `private`、也不取决于它的类型，而纯粹看有没有这个标签**——没贴标签的字段，存档系统会完全忽略。

## 心智模型

把 `[SaveableField(n)]` 理解为字段与存档二进制 blob 之间的**稳定地址标签**：

- 存档系统在启动阶段（`DefinitionContext.FillWithCurrentTypes`）扫描每个已注册类型，对每个类型调用 `TypeDefinition.CollectFields()`。该方法用反射找出所有带 `[SaveableField]` 的字段，并为它们建立“键 → 字段”的映射：`MemberTypeId = (TypeLevel << 8) + LocalSaveId`。其中 `TypeLevel` 来自 `TypeDefinitionBase.GetClassLevel`（类型在继承链中的深度），因此**同一层级内的 `LocalSaveId` 必须唯一**。
- 写档时，`SaveManager` 通过每个 `FieldDefinition` 读出字段当前值，连同它的 `LocalSaveId` 一起写进存档；读档时 `ObjectLoadData` 按 `LocalSaveId` 在旧存档里查找对应字节，再用 `FieldInfo.SetValue` 写回当前字段。
- 关键点：**绑定靠的是 `LocalSaveId` 这个数字，而不是字段名、也不是字段在类里的声明顺序**。所以改名字是安全的，改 id 是危险的。

## 何时使用 / 何时不要使用

**使用**：当一个类已经被存档系统识别（通过 `SaveableTypeDefiner.AddClassDefinition` / `AddRootClassDefinition` 注册，或作为某个已注册可存档图的一部分），而你想让它的某个字段在存读档之间保留值，就在这个字段上贴 `[SaveableField(id)]`。`id` 在该类层级内唯一即可。

**不要使用**：

- 不要贴在**属性（property）**上——属性请用 `SaveablePropertyAttribute`（见同级页）。本特性的 `[AttributeUsage(AttributeTargets.Field)]` 也只允许贴字段；贴到属性或类会在编译期或定义期报错。
- 不要贴在**纯运行时 / 瞬态**字段上（缓存、事件订阅、延迟计算的派生值、窗口句柄等）。这些既没必要进存档，也会制造无意义的版本漂移，甚至把不可序列化的对象带进 blob。
- 不要为了“标记一下”而贴——只有真正进入存档图的实例的字段才有意义。

## 依赖图

- 上游：[SaveableTypeDefiner](../SaveableTypeDefiner/)（注册持有该字段的类型，使其进入 [DefinitionContext](../DefinitionContext/)）、[ContainerDefinition](../ContainerDefinition/) 与 [ContainerType](../ContainerType/)（字段若是 `List<>`、`Dictionary<,>`、`MBList<>`、数组等集合，由存档系统自动按容器处理）。
- 读取：[FieldDefinition](../FieldDefinition/)（每个标记字段在系统内的定义，携带 `SaveableFieldAttribute` 与 `MemberTypeId`）、[MemberTypeId](../MemberTypeId/)（键的构成：TypeLevel + LocalSaveId）、[ObjectLoadData](../ObjectLoadData/)（读档时按 `LocalSaveId` 还原字段）。
- 驱动：[SaveManager](../SaveManager/)（统一的存 / 读档入口，决定何时把字段写进 blob、何时还原）。
- 下游：你这个类的字段值，随 [SaveManager](../SaveManager/) 的存读档在整个战役存档里存活。

## 风险：改 LocalSaveId / 挪字段会坏档（核心防坏档主题）

这是使用本特性最容易踩的坑，务必记住：

1. **LocalSaveId 是跨版本的稳定键**。旧存档里每个字段的字节都带着当初的 `LocalSaveId`。读档时系统靠这个 id 把字节送回“当前”的字段。如果你把某个字段的 id 从 `2` 改成 `5`（或把 `5` 复用给另一个类型不同的字段），旧存档的字节就会被错误地写进新字段——轻则数据错位、静默损坏，重则类型不匹配直接崩溃。
2. **同一类层级内 id 必须唯一**。若两个字段用了相同 `LocalSaveId`，`TypeDefinition.CollectFields()` 会在启动期记录错误：`"SaveId (level,id) of field ... is already defined in type ..."`，该类型定义失败。
3. **安全操作**：重命名字段（id 不变）→ 安全；给类新增一个带**全新 id** 的字段 → 安全（旧存档没有该 id，字段保留构造默认值）；删除一个字段 → 安全（旧存档里多出来的 id 在 `ObjectLoadData` 里 `SingleOrDefault` 查不到匹配，会被忽略）。
4. **危险操作**：修改已有字段的 id、把旧 id 挪给别的字段、在同一层级内让两个字段共用一个 id。
5. **需要改语义时的正确做法**：如果某个字段的含义变了、必须重新映射旧存档，使用 `SaveableTypeDefiner.DefineConflictResolvers()` + `IConflictResolver` 把旧 `MemberTypeId` 显式映射到新字段，而不是随便改 id。这是官方支持的版本迁移通道。
6. **`short` 范围**：`LocalSaveId` 是 `short`（约 −32768 ~ 32767），实际用正整数即可；值与字段声明顺序无关，你可以预留间隔（`1`、`2`、`3`… 或 `10`、`20`、`30`…）方便以后插入。

> 一句话：**LocalSaveId 一旦随版本发布就视为契约，只增不改。**

## 成员说明

本特性只有一个必填构造参数，没有其它成员。

| 成员 | 形式 | 含义 | 副作用 / 何时生效 |
|------|------|------|-------------------|
| `LocalSaveId` | 构造参数 `SaveableFieldAttribute(short localSaveId)`，同时是可读写属性 | 该字段在当前类型层级内的**稳定存档键**。存档系统用它把“写出的字节”和“读回的字段”对应起来。 | 在类型被 `SaveableTypeDefiner` 注册后、存读档时由 `TypeDefinition.CollectFields()` 读取并纳入 `MemberTypeId`。构造时必须提供（没有无参构造函数），例如 `[SaveableField(3)]`。 |

> 因为构造参数必填，最常见的写法是位置参数 `[SaveableField(3)]`；也可以用具名形式 `[SaveableField(LocalSaveId = 3)]`，二者等价。被标记的对象永远是**字段**，不是属性或类。

## 最小真实示例

### 示例 1：在可存档数据类上标记字段，并在 SaveableTypeDefiner 中注册

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

// 一个持有持久化数据的简单类
public class MyModSaveData
{
    // LocalSaveId 在该类层级内唯一；跨版本保持稳定，绝不改动
    [SaveableField(1)]
    public int TotalGoldEarned;

    [SaveableField(2)]
    public List<string> CompletedQuestTags;

    // 私有字段同样会被序列化——可见性不影响 [SaveableField]
    [SaveableField(3)]
    private int _cachedCounter;

    // 运行时缓存：不要持久化，因此不加 [SaveableField]
    public Dictionary<string, int> RuntimeLookup;
}

// 存档系统会通过反射自动发现所有 SaveableTypeDefiner 子类并调用其 Define* 方法
public class MyModTypeDefiner : SaveableTypeDefiner
{
    // saveBaseId 是向 TaleWorlds 申请到的 id 区间基数
    public MyModTypeDefiner() : base(1000000) { }

    protected override void DefineClassTypes()
    {
        base.DefineClassTypes();
        AddClassDefinition(typeof(MyModSaveData), 1);
    }
}
```

`AddClassDefinition` 把 `MyModSaveData` 登记进 `DefinitionContext`；之后存档系统对该类型调用 `CollectFields()`，扫描到三个 `[SaveableField]` 字段，分别用 `LocalSaveId` 1 / 2 / 3 建立字段定义。`List<string>` 字段会被自动当作 `ContainerType.List` 处理。

### 示例 2：读档后取回已还原的实例

```csharp
// 在 CampaignBehavior 中访问已经反序列化好的数据
MyModSaveData data = Campaign.Current
    .GetCampaignBehavior<MyModBehavior>()?.SaveData;
```

> 要让实例真正进入存档图，它必须能从某个已注册的可存档根对象（如战役里的 `CampaignBehavior`）到达。`SaveManager` 负责在存 / 读档时遍历整张图并读写每个 `[SaveableField]` 字段。

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `SaveableFieldAttribute` 声明完全一致：`[AttributeUsage(AttributeTargets.Field)]`、必填 `short LocalSaveId` 构造参数、可读写 `LocalSaveId` 属性。本页内容在两版通用。

## 参见

- ↑ 父级：[存档系统索引](../)
- ↔ 同级：[SaveablePropertyAttribute](../SaveablePropertyAttribute/)（贴在属性上的等价特性）
- 相关：[SaveableTypeDefiner](../SaveableTypeDefiner/)（注册类型、定义冲突解析）、[SaveManager](../SaveManager/)（存 / 读档驱动）、[ContainerDefinition](../ContainerDefinition/)（集合类型的容器序列化）、[TypeDefinition](../TypeDefinition/) 与 [FieldDefinition](../FieldDefinition/)（字段定义与键映射）、[MemberTypeId](../MemberTypeId/)（键的构成）、[DefinitionContext](../DefinitionContext/)（启动时收集字段）
- 跨模块：[MBSubModuleBase](../../core/MBSubModuleBase/)（Behavior 生命周期入口）、[存档系统架构](../../../architecture/save-system/)、[SDK 总览](../../../architecture/sdk-overview/)
