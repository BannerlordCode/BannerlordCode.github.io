---
title: "AttributeBoundSkillItemVM"
description: "角色成长界面里「绑定到某属性的技能」一行：只有 Name 和 SkillId 两个字符串属性，构造器从 SkillObject 一次性取出，没有任何方法。"
---

# AttributeBoundSkillItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AttributeBoundSkillItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/AttributeBoundSkillItemVM.cs`（全文 63 行）

## 概述

全文 63 行，**一个构造器、两个绑定属性、两个私有字段、零个方法**。它是本批里最小的一类 ViewModel。

```csharp
public AttributeBoundSkillItemVM(SkillObject skill)
{
    this.Name = skill.Name.ToString();
    this.SkillId = skill.StringId;
}
```

**构造器一结束，这个对象就不再与任何 `SkillObject` 有关联了。** 它不存 `skill` 引用，只存两个字符串：`Name`（技能显示名的 `ToString()` 结果）和 `SkillId`（`skill.StringId`）。

## 心智模型

**把它想成「一条从 `SkillObject` 拍下来的扁平快照」**，而不是对技能的引用。

这是理解它所有性质的钥匙。**因为只剩两个字符串：**

- **没有 `SkillObject Skill` 属性。** 想拿技能对象（比如读它的 `Attributes` 判断绑了哪些属性）只能自己拿 `SkillId` 去 [Skills](../../core-extra/SkillObject) 之类的注册表反查；
- **没有 `RefreshValues()` 覆写。** 基类 [ViewModel](../../core-extra/ViewModel) 的 `RefreshValues()` 默认是空实现，本类不需要覆写——**因为它没有可刷新的数据源**。语言切换后要重取显示名，只能 new 一个新的；
- **`Name` 变了不会回写到 `SkillObject`。** 两个 setter 都只改本地字段并发通知。

**唯一的持有者是 [CharacterAttributeItemVM](../CharacterAttributeItemVM)**。它的 `RefreshValues()`（第 53–67 行）这样构造本类：

```csharp
this.BoundSkills.Clear();
List<SkillObject> list = Skills.All.ToList<SkillObject>();
list.Sort(CampaignUIHelper.SkillObjectComparerInstance);
foreach (SkillObject skill in list)
{
    if (skill.Attributes.Contains(this.AttributeType)
        && !this.BoundSkills.Any(s => s.SkillId == skill.StringId))
    {
        this.BoundSkills.Add(new AttributeBoundSkillItemVM(skill));
    }
}
```

**三个细节值得记住：**

1. **候选来自 `Skills.All`（全局技能表），不是角色的实际技能。** 判据是 `skill.Attributes.Contains(this.AttributeType)`——这个技能**定义上**绑定了当前属性，而不是角色学会了它。
2. **去重靠 `SkillId`**（`!BoundSkills.Any(s => s.SkillId == skill.StringId)`）。这正是 `SkillId` 存在的唯一理由。
3. **列表先 `Clear()` 再重建，每次 `RefreshValues` 都是全新一批对象。** 所以外部持有旧引用的代码在刷新后会指向孤儿对象。

排序用 `CampaignUIHelper.SkillObjectComparerInstance`——**排的是 `SkillObject`，不是本类**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AttributeBoundSkillItemVM(SkillObject skill)` | 两个参数变一个：`Name = skill.Name.ToString()`、`SkillId = skill.StringId`。**参数不判 null**——传 null 会 NRE。**不会 `RefreshValues()`**（不需要）。**构造器无参重载不存在。** |
| `Name` | `public string Name { get; set; }` | `[DataSourceProperty]`。技能显示名，构造时由 `TextObject.ToString()` 得到。**setter 判等后发 `OnPropertyChangedWithValue<string>(value, "Name")`；赋值不会回写 `SkillObject`。** 换语言后要更新只能 new。 |
| `SkillId` | `public string SkillId { get; set; }` | `[DataSourceProperty]`。`SkillObject.StringId`。**这是这一行唯一的稳定标识**——去重、反查都用它。**setter 同上。** |

私有成员：`private string _name;` 与 `private string _skillId;`——两者**都没有字段初值**，所以构造器之外 new 出来的实例（无参不存在，只能靠反射）读到的会是 null。

继承来、不属于本页的：`RefreshValues()`（空）、`OnPropertyChanged(...)` 系列、`ExecuteCommand(...)` 反射派发、`PropertyChanged` 与九个类型化事件。

## 真实示例

因为不存 `SkillObject` 引用，「拿 `SkillId` 反查回技能对象」是外部必须自己做的一步。`Skills` 是全局技能表，用它的 `Get` 就能反查：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 我的技能过滤器：靠 SkillId 反查 SkillObject，才能读它定义上绑的属性
public class MyBoundSkillInspector
{
    private readonly CharacterAttributeItemVM _owner;

    public MyBoundSkillInspector(CharacterAttributeItemVM owner)
    {
        this._owner = owner;
    }

    public string DescribeDefaultSkills()
    {
        // BoundSkills 是 MBBindingList<AttributeBoundSkillItemVM>，
        // 每次 owner.RefreshValues() 都会被 Clear 后重建。
        var builder = new System.Text.StringBuilder();
        foreach (AttributeBoundSkillItemVM row in this._owner.BoundSkills)
        {
            // SkillId 唯一的用途就是这个反查
            SkillObject skill = Skills.All.FirstOrDefault(
                s => s.StringId == row.SkillId);

            builder.Append(row.Name);
            builder.Append(skill != null ? " [有技能对象]" : " [已失效]");
            builder.Append('\n');
        }
        return builder.ToString();
    }
}
```

`Skills.All` 返回可枚举的技能表，`SkillObject.StringId` 是它的稳定 id；**若某个 `SkillId` 在表里找不到（模组卸载、语言包换表），`FirstOrDefault` 返回 null，而 `Name` 那一列仍有值** —— 这就是「显示名还在、对象没了」的不一致来源。

## 风险与边界

- **零方法。** 没有任何行为入口，连 `RefreshValues()` 都没覆写——按「本类声明的成员」做反射枚举只会得到构造器和两个属性。
- **`SkillObject` 引用不保留。** 构造器一结束就只剩两个字符串。想读技能对象的任何属性都得自己反查。
- **`Name` 是 `TextObject.ToString()` 的一次性结果。** **切换语言后不会更新**，必须 new 一个新的实例。官方 `CharacterAttributeItemVM.RefreshValues()` 用 `BoundSkills.Clear()` + 重建来绕过这一点。
- **`SkillId` 可能是 null。** `skill.StringId` 在异常构造的 `SkillObject` 上会给出 null，此时 `BoundSkills.Any(s => s.SkillId == skill.StringId)` 会把多条 null 视为重复——**去重逻辑会误杀**。
- **构造器不判 `skill` 参数。** 传 null 直接 NRE。
- **`_name` / `_skillId` 没有字段初值。** 通过反射绕开构造器造出来的实例，两个属性都是 null。
- **`AttributeType` 的语义是「这个技能定义上绑的属性」。** 它不表示角色学会了该技能——所以列表内容会包含角色完全没点的技能。
- **列表是每次刷新重建的。** 外部缓存的 `AttributeBoundSkillItemVM` 引用在 `RefreshValues()` 之后会变成孤儿（还能读字段，但不再出现在任何列表里，也不会再收到通知）。
- **两个 setter 是纯 UI 绑定属性的标准写法**：判等 → 赋值 → `OnPropertyChangedWithValue`。**没有任何副作用**（与 [ArmyManagementItemVM](../ArmyManagementItemVM) 里 `Cost` / `ShipCount` 那种 setter 带副作用的情况正好相反——这一页是「干净 setter」的样板）。

## 跨版本提示

**`AttributeBoundSkillItemVM.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐字节等价**：都是 64 行（含 BOM 与尾行），public/protected 成员集合都是「一个构造器 + 两个字符串属性」，零变化。**这是本批里跨版本稳定性第二高的类型**（第一是 [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)，零成员的空事件）。

**跨版本风险全在它依赖的上游：**

- `Skills.All` 与 `SkillObject.StringId`（[SkillObject](../../core-extra/SkillObject)）——官方增删技能只改内容不改这个类的形状；
- `CharacterAttributeItemVM.BoundSkills`（[CharacterAttributeItemVM](../CharacterAttributeItemVM)）——**宿主若改了这个属性的类型，本类的使用点就断了**；
- `DefaultCharacterAttributes` 系列与 `CampaignUIHelper.SkillObjectComparerInstance`（[CampaignUIHelper](../CampaignUIHelper)）。

**结论：这个类可以放心当纯数据行使用，跨 1.3 → 1.5 完全兼容。**

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供两个属性的通知与 `ExecuteCommand` 派发（都用不到，但继承自它）
- 唯一持有者：[CharacterAttributeItemVM](../CharacterAttributeItemVM) 的 `RefreshValues()` 里 `Clear()` 后逐个 `new`，并存入 `BoundSkills`
- 数据来源：[SkillObject](../../core-extra/SkillObject)（`Name` 是 `TextObject`、`StringId` 是稳定 id、`Attributes` 是绑定属性集合）；技能表见 [DefaultSkills](../../core-extra/DefaultSkills)
- 筛选判据：`CharacterAttributeItemVM.AttributeType` 与 `CharacterAttribute`（[CharacterAttribute](../../core-extra/CharacterAttribute)）的 `ToString()` 比较
- 排序：[CampaignUIHelper](../CampaignUIHelper) 的 `SkillObjectComparerInstance`（排的是 `SkillObject`，不是本类）
- 集合容器：[MBBindingList](../../core-extra/MBBindingList)（`Clear` / `Add` / `Any`）
- 同类对照：[ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)（同样「构造器一次性取值」的子控件 VM，但有行为）
- 桶首页：[viewmodel API 分区](../)
