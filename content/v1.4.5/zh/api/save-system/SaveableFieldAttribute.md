---
title: "SaveableFieldAttribute"
description: "为已注册存档类型的实例字段分配稳定 LocalSaveId，并由 TypeDefinition 收集字段元数据。"
---

# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveableFieldAttribute : Attribute`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## 一句话职责

`SaveableFieldAttribute` 是 SaveSystem 的字段成员契约。它只给一个实例 field 携带 `LocalSaveId`；它不会注册字段类型、创建 `DefinitionContext`，也不会让一个没有类型定义的对象自动变成可存档对象。

## 心智模型

把它看成“已注册类型中的一个存档槽位编号”，而不是运行时标签。真正的链路是：

1. [SaveManager](../SaveManager) 创建 [DefinitionContext](../DefinitionContext)。
2. `DefinitionContext` 发现并初始化 [SaveableTypeDefiner](../SaveableTypeDefiner)，由 definer 注册类型、根类、泛型和容器。
3. 类型定义完成后，[TypeDefinition](../TypeDefinition) 扫描带有这个 Attribute 的 field。
4. 保存或加载对象图时，字段定义和 `LocalSaveId` 才参与成员数据的定位。

如果只是要让一个 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 保存自己的少量战役状态，优先使用 `SyncData(IDataStore)`。不要因为一个 Behavior 有一个 `int` 就额外建立 Saveable field schema；两种机制的拥有者、键和加载时机不同。

## 源码契约

源码定义为：

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

这段定义有几个实际含义：

- `AttributeTargets.Field` 只允许把它写在字段上；写在 property 或 class 上不是这个 Attribute 的合法目标。
- `AllowMultiple` 和 `Inherited` 没有显式传入，因此 .NET 的 `AttributeUsage` 默认值是 `AllowMultiple = false`、`Inherited = true`。引擎仍按字段的声明类型和反射结果建立成员定义，不能把 `Inherited = true` 理解成“派生类自动获得一个新的独立存档槽位”。
- Attribute 没有无参构造函数。`[SaveableField(11)]` 会调用带 `short` 参数的构造函数。
- `LocalSaveId` 的 setter 是 public，源码构造函数也不做范围或重复检查。引擎收集元数据时读取当时的值；发布后应把它当成稳定、非负、不会复用的 schema ID，不要在运行时修改。

## 真实源码示例

`TaleWorlds.Core.Game` 使用私有字段保存下一个 troop seed：

```csharp
public sealed class Game : IGameStateManagerOwner
{
    [SaveableField(11)]
    private int _nextUniqueTroopSeed = 1;
}
```

这里 `11` 是字段的本地成员 ID，`int` 是字段类型。它能进入对象图，不是因为 Attribute 自动注册了 `int`，而是因为 core 的全局保存定义已经知道如何处理基本类型，且 `Game` 作为根对象被单独注册。

对比同一个 `Game` 的 property：

```csharp
[SaveableProperty(3)]
public GameType GameType { get; private set; }
```

这个成员必须使用 [SaveablePropertyAttribute](../SaveablePropertyAttribute)，不能把 field Attribute 套在 property 上。`Game` 的根标记和根定义还分别涉及 [SaveableRootClassAttribute](../SaveableRootClassAttribute) 与 [SaveableTypeDefiner](../SaveableTypeDefiner)；三层 ID 不要混用。

## 何时被收集

`DefinitionContext.FillWithCurrentTypes()` 先收集可保存程序集，实例化非抽象 `SaveableTypeDefiner`，再依次执行 basic、class、struct、interface、enum、root、generic 和 container 定义，最后执行 conflict resolver 定义。此后才对 root class、class 和 struct 的 `TypeDefinition` 收集成员元数据。

对普通 root/class 定义，源码顺序是：先 `CollectInitializationCallbacks()`，再 `CollectProperties()`，最后 `CollectFields()`。`CollectFields()` 的关键行为是：

- 从当前类型的 instance public/non-public fields 中取出非 private 字段。
- 沿继承层级继续检查 private 字段，因此带 Attribute 的 private 基类字段也可能被收集。
- 收集范围是 instance field；静态字段不会进入这条路径。
- 对每个字段读取第一个 `SaveableFieldAttribute`，取字段的 `DeclaringType` 计算 class level，再构造 `MemberTypeId`。
- 成功时把 `FieldDefinition` 放入 `TypeDefinition.FieldDefinitions` 和 `MemberDefinitions`。

这解释了两个常见误解：字段不会在 Attribute 写下的那一刻保存；同样，给字段加 Attribute 也不会替代 definer 对字段类型和容器的注册。

## MemberTypeId、继承与重复 ID

`LocalSaveId` 不是整个成员身份。`TypeDefinition` 用声明类型的 class level 和本地 ID 构造：

```csharp
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveableFieldAttribute.LocalSaveId);
```

`MemberTypeId` 的 `SaveId` 由 `(TypeLevel << 8) + LocalSaveId` 计算。于是：

- 同一个继承链上，不同声明类型的成员可能因 `TypeLevel` 不同而拥有不同的成员身份。
- 把字段移到基类/派生类、改变继承结构，可能改变 `TypeLevel`，即使字段名称和本地数字不变，schema 也可能已经改变。
- `_fields` 是按 `MemberTypeId` 索引的字典。两个字段在同一声明层级使用同一个 ID 时，`CollectFields()` 不覆盖旧定义，而是向 `TypeDefinition.Errors` 添加重复 SaveId 错误。
- field 与 property 使用两个独立字典；两个不同成员类别出现相同 `(TypeLevel, LocalSaveId)` 不应被误读成相同的 API 路径，但工程上仍应为每个类型维护清晰、稳定的编号表。

重复 ID 不是可忽略 warning。`DefinitionContext` 汇总 `TypeDefinition.Errors`，`SaveManager.Save` 发现 context 有错误时会返回失败结果，不会开始可信的对象图序列化。

## 类型依赖与 `SyncData` 边界

`SaveableFieldAttribute` 只回答“哪个 field、用哪个 member ID”。它不回答“field 的类型怎样序列化”。字段类型是自定义 class、struct、enum、封闭泛型或 container 时，必须确认 [SaveableTypeDefiner](../SaveableTypeDefiner) 与 [DefinitionContext](../DefinitionContext) 已有对应定义；[SaveManager.CheckSaveableTypes](../SaveManager) 可以用于发现带 Attribute 但尚未有类型定义的成员类型。

`CampaignBehaviorBase.SyncData([IDataStore](../../campaign/IDataStore))` 是另一条契约：行为管理器按行为身份建立数据记录，再用稳定字符串 key 同步字段。它不是完全无关的第二份文件格式，内部 `CampaignBehaviorDataStore.BehaviorSaveData` 自身也由 SaveSystem 保存；`SyncData` 先把 Behavior 状态写入按 key 分组的记录，再由这个适配层进入对象图。行为拥有的 `_daysObserved`、计数器或配置状态不需要再用 `[SaveableField]` 标记同一字段。只有当字段属于已经进入 SaveSystem 对象图的类型，并且你确实需要成员级 schema 时，才使用本 Attribute。

## 兼容性与风险

- **不要重排已发布 ID。** 改 `11` 为 `12`、复用已删除的 `11`、改变声明类型或改变字段类型，都会改变旧存档解释方式。保留旧槽位，必要时通过明确的 conflict resolver 或迁移策略兼容。
- **不要依赖字段名。** SaveSystem 的成员定位使用类型层级和 `MemberTypeId`，字段重命名本身不能保留旧 ID；移动字段也可能改变层级部分。
- **不要隐藏重复。** 同一类型层级的重复 field ID 会进入 context error；修复编号表后再测试保存和加载，不要把错误当作普通日志。
- **不要保存临时运行时对象。** `Mission`、`Agent`、UI 控件、委托、线程或引擎句柄不应因为可以写入字段就被放进战役存档；它们需要在合适生命周期重新获取。
- **不要绕过游戏的保存入口。** mod 不应在事件回调里自行创建 `DefinitionContext` 或直接调用 `SaveManager.Save` 保存 `Campaign.Current`；普通战役状态应回到 Behavior 的 `SyncData` 流程。

## 导航

- 上级：[存档系统目录](../)
- 同级：[SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
- 相关：[DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Game](../../core/Game)
