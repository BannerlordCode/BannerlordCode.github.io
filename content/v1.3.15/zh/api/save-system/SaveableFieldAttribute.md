---
title: "SaveableFieldAttribute"
description: "把实例字段加入 TaleWorlds.SaveSystem 成员定义的 Attribute；LocalSaveId 是类型内部的持久化契约。"
---
# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableFieldAttribute : Attribute`
**Base:** `Attribute`
**源文件：** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`（以 1.4.5 源码为语义依据）

## 职责

`SaveableFieldAttribute(short localSaveId)` 只做一件事：告诉保存系统“这个实例字段是存档成员，并使用这个类型内部的本地编号”。它不会单独创建类型定义、不会注册 Behavior，也不会让不可序列化的字段变得可序列化。

## 心智模型

把 `LocalSaveId` 当成**类型成员的 schema 编号**，而不是数据库自增 ID。保存系统读取字段上的 Attribute，再由 [SaveableTypeDefiner](../SaveableTypeDefiner/) 将包含该字段的类放入定义上下文；[SaveManager](../SaveManager/) 之后才能收集、写出和恢复成员。

字段编号必须在所属声明类层级的**字段表**内唯一并跨版本稳定。`TypeDefinition` 对字段和属性分别收集、分别读写；二者不共享重复检查。字段的 `MemberTypeId` 仍包含声明类层级和 `LocalSaveId`，字段声明顺序、私有/公共可见性都不应被当成兼容机制。

## 何时使用 / 何时不要使用

适合：状态是类的实现细节、需要随对象图保存、且不需要通过公共属性暴露；例如计数器、缓存外的持久状态、对已定义 `MBObjectBase` 的引用。

不适合：

- Behavior 的私有状态应优先在 `CampaignBehaviorBase.SyncData(IDataStore)` 中登记，参见 [IDataStore](../../campaign-ext/IDataStore)。
- 纯运行时缓存、线程句柄、UI 控件、场景实体句柄不应保存。
- 不能把 Attribute 当作类型注册；包含字段的类仍需由 definer 注册。

## 成员

```csharp
[AttributeUsage(AttributeTargets.Field)]
public class SaveableFieldAttribute : Attribute
{
    public short LocalSaveId { get; set; }
    public SaveableFieldAttribute(short localSaveId)
    {
        LocalSaveId = localSaveId;
    }
}
```

`LocalSaveId` 是可读写的 `short` 属性，但产品代码应把它视为已经发布的 schema 编号，不要在运行中改写。源码的 Attribute 目标只包含 `Field`；属性成员应使用 [SaveablePropertyAttribute](../SaveablePropertyAttribute)。`TypeDefinition.CollectFields()` 以声明类型 class level 加上这个 ID 构成 `MemberTypeId`；字段名和声明顺序不参与匹配。

## 真实示例：字段、类型定义与读档

```csharp
public sealed class RelicState
{
    [SaveableField(1)]
    private int _discoveredCount;

    [SaveableField(2)]
    private Hero _discoverer;

    public void RestoreDefaults()
    {
        _discoveredCount = Math.Max(_discoveredCount, 0);
    }
}

public sealed class RelicSaveDefiner : SaveableTypeDefiner
{
    public RelicSaveDefiner() : base(910000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicState), 1);
    }
}

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_myMod_relicState_v1", ref _relicState);
}
```

这个例子展示三层不同契约：Attribute 标记字段，definer 给 `RelicState` 分配类型定义，Behavior 的 `IDataStore` 保存根对象。只写第一层，字段不会自动进入可读写的完整存档图。

## 真实原生声明

1.4.5 的 `AllianceCampaignBehavior` 使用结构字段和行为外层 `SyncData`：

```csharp
internal struct Alliance(Kingdom kingdom1, Kingdom kingdom2, CampaignTime endTime)
{
    [SaveableField(0)] public readonly Kingdom Kingdom1 = kingdom1;
    [SaveableField(1)] public readonly Kingdom Kingdom2 = kingdom2;
    [SaveableField(2)] public CampaignTime EndTime = endTime;
}

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_alliances", ref _alliances);
}
```

同一文件的 `AllianceCampaignBehaviorTypeDefiner` 以 `AddStructDefinition(typeof(Alliance), 1)` 登记结构，并以 `ConstructContainerDefinition(typeof(List<Alliance>))` 登记列表。调用方从 `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()` 获取 Behavior；不手动创建 definer。该例清楚区分了外层字符串 key、类型 SaveId 和字段 `LocalSaveId`。

## 风险与坏档边界

- **字段表内重复编号会混淆成员。** 同一声明类层级的两个字段使用相同 `LocalSaveId` 时，`CollectFields()` 会记录定义错误；属性由独立的属性表收集，不能据此声称字段/属性共享唯一性。
- **发布后不要换号。** 把字段从 `1` 改成 `3` 等同于改变存档 schema；没有兼容 resolver 时旧档无法按原成员找到数据。
- **不要原地改变字段类型。** `int` 改为 `List<int>`、对象改为不兼容类型，都可能在收集或加载阶段失败。新增版本化成员并保留旧数据转换路径更安全。
- **缺少 definer 不是无害遗漏。** 类型不在 `DefinitionContext` 中时，`SaveManager.Save` 可能因定义错误返回失败，而不是悄悄保存字段。
- **字段值必须可进入对象图。** 把临时引擎对象、第三方句柄或循环无法解析的对象放进字段，会让保存收集/加载失败。
- **不要把 `IDataStore` 和 Attribute 混用。** `IDataStore` 以字符串 key 分桶；`SaveableField` 以类型和 `LocalSaveId` 定义成员，两者的兼容规则不同。

- **读档时机。** `SaveManager.Load` 先建立定义上下文；`LoadContext` 创建对象、解析引用、填充字段/属性，最后才运行初始化和 late 初始化回调。不要在构造函数或过早事件中假设字段已经恢复；依赖其他对象的修复应放到加载回调或 Behavior 的 `OnGameLoaded`。

## 跨版本提示

1.3.15 和 1.4.5 的 Attribute 构造函数及 `LocalSaveId` 类型一致。跨版本 mod 应固定编号、固定字段类型，并在删改成员前设计兼容加载；不要依赖反编译文件中的字段顺序。

## 依赖关系与导航

- 上游：[SaveableTypeDefiner](../SaveableTypeDefiner) 负责将声明字段的类加入定义表。
- 执行：[SaveManager](../SaveManager) 初始化定义上下文并执行保存/加载。
- 对比：[SaveablePropertyAttribute](../SaveablePropertyAttribute) 标记属性；[IDataStore](../../campaign-ext/IDataStore) 处理 Behavior 键值同步。
- 常见对象：[MBObjectBase](../../campaign-ext/MBObjectBase) 的 `StringId`、`Id` 也由保存系统定义。

- 父级：[save-system API](./)
- 同级：[SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner)
- 相关：[FieldDefinition](../FieldDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) · [存档与崩溃边界](../../../architecture/crash-boundaries)
