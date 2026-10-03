---
title: "AttributeBoundSkillItemVM"
description: "角色成长界面里「某个属性绑定了哪些技能」列表中的一行。整个类只有两个绑定属性和一个构造函数，构造时把一个 SkillObject 拍平成显示名与 StringId；它没有任何行为、没有生命周期、不注册任何东西。"
---
# AttributeBoundSkillItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AttributeBoundSkillItemVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/AttributeBoundSkillItemVM.cs`

## 概述

角色成长（Character Developer）界面里，点开某一项属性（力量/敏捷/智力/社交…）会看到一张"绑定技能"清单。清单上的每一行就是本类。它做的事情少到几乎是笑话：

```csharp
public AttributeBoundSkillItemVM(SkillObject skill)
{
    Name = skill.Name.ToString();
    SkillId = skill.StringId;
}
```

**全部实现。** 51 行文件，去掉 `using` 与命名空间后只有两个 `[DataSourceProperty]` 属性和这一个构造函数。没有 `RefreshValues` 覆写、没有事件、没有 `OnFinalize`、没有构造函数之外的方法。

两个属性的用途完全不同，这一点很关键：

- `Name` 是**给人看的**：`skill.Name.ToString()` 把 `TextObject` 转成字符串快照。
- `SkillId` 是**给机器看的**：`skill.StringId`，用来被外部去重、查找、再反查回 `SkillObject`。

## 谁在用它

唯一的构造点在 `CharacterAttributeItemVM.RefreshWithCurrentValues()`（`CharacterAttributeItemVM.cs:271-280`）：

```csharp
BoundSkills.Clear();
List<SkillObject> list = Skills.All.ToList();
list.Sort(CampaignUIHelper.SkillObjectComparerInstance);
foreach (SkillObject skill in list)
{
    if (Enumerable.Contains(skill.Attributes, AttributeType) &&
        !BoundSkills.Any((AttributeBoundSkillItemVM s) => s.SkillId == skill.StringId))
    {
        BoundSkills.Add(new AttributeBoundSkillItemVM(skill));
    }
}
```

这段代码交代了三件事：

1. **来源是全量技能表** `Skills.All`（即 `Campaign.Current.AllSkills`），不是某个子集。筛选条件是 `skill.Attributes` 里含有当前正在查看的属性。
2. **排序由调用方负责**，用的是共享的 `CampaignUIHelper.SkillObjectComparerInstance` 实例。本类自己不排序，也不保证传入的 `SkillObject` 有序。
3. **去重靠 `SkillId`**：`!BoundSkills.Any(s => s.SkillId == skill.StringId)`。这正是 `SkillId` 存在的唯一理由——如果 `Name` 是主键，同名技能就会被错误合并。

## 心智模型

把它读成**「一次性的 (显示名, id) 二元组，构造完成即冻结」**：

- **谁 new 它**：`CharacterAttributeItemVM.RefreshWithCurrentValues()`，每次刷新属性面板时**整批重建**。注意 `BoundSkills.Clear()` 在前面——旧的实例全部丢弃。
- **谁持引用**：外层 `CharacterAttributeItemVM` 的 `BoundSkills`（一个 `MBBindingList<AttributeBoundSkillItemVM>`），最终由角色成长屏幕持有并逐行渲染。
- **绑定到哪个 View 属性**：只有 `Name` 与 `SkillId`，两者都标了 `[DataSourceProperty]`。prefab 上那一行模板绑的就是这两个。
- **什么时候 Dispose**：**不需要任何 Dispose。** 它没有覆写 `OnFinalize`，没有注册 `CampaignEvents`、没有注册 `Game.Current.EventManager`、没有持有任何需要释放的句柄。外层 `Clear()` 一调用，整批实例就成了垃圾。**这是本目录里生命周期成本最低的一类。**
- 🔴 **两个属性都是构造时的快照，之后永不更新。** `Name` 尤其明显：`skill.Name.ToString()` 在构造那一刻就把 `TextObject` 变成了字符串。如果语言在这一行显示期间切换，**这一行的文字不会变**，直到外层整批重建。反过来说，`SkillId` 是纯 id，本来也不需要更新。
- 🔴 **不持有 `SkillObject` 本身。** 它只存了 `Name` 字符串与 `StringId`，**没有字段保存传进来的 `skill`**。所以你无法从这一行反查技能对象，必须拿 `SkillId` 自己去 `Skills.All` 里找。
- **没有行为方法。** 没有 `ExecuteXxx`，没有点击处理。这一行是纯展示的，不响应任何输入。想让点击有反应得在 `CharacterAttributeItemVM` 那层加。
- **常见误用**：把 `Name` 当稳定主键。技能改名会造成两行的 `Name` 相同而 `SkillId` 不同，此时按 `Name` 去重会丢掉一个技能。去重永远用 `SkillId`。
- **常见误用二**：缓存了某一行的实例跨越面板重开。面板每次 `RefreshWithCurrentValues()` 都 `Clear()` 重建，你手里的旧实例永远不会收到更新。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Name` | `[DataSourceProperty] public string Name`（`AttributeBoundSkillItemVM.cs:12-27`） | 列表行显示的技能名。构造时由 `skill.Name.ToString()` 转成**字符串快照**（`:48`），此后不更新。**不要**用它做主键。 |
| `SkillId` | `[DataSourceProperty] public string SkillId`（`:29-44`） | `skill.StringId`，这一行的**稳定身份**。外层正是用它做去重（`CharacterAttributeItemVM.cs:276`）。语言切换、技能改名都不影响它。 |
| 构造函数 | `public AttributeBoundSkillItemVM(SkillObject skill)`（`:46-50`） | 唯一的构造入口。两行代码：填 `Name`、填 `SkillId`。**不保存 `skill` 引用**——传进来的对象在这一行存在期间就与本实例无关了。 |

**没有** `RefreshValues` 覆写、`OnFinalize` 覆写、`Execute*` 命令方法或任何字段。

## 真实示例

复刻外层那三步——全量取表、排序、去重：

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;
using TaleWorlds.Library;

public MBBindingList<AttributeBoundSkillItemVM> BuildBoundSkills(CharacterAttribute attribute)
{
    MBBindingList<AttributeBoundSkillItemVM> bound = new MBBindingList<AttributeBoundSkillItemVM>();

    // Skills.All 就是 Campaign.Current.AllSkills
    List<SkillObject> candidates = Skills.All.ToList();
    candidates.Sort(CampaignUIHelper.SkillObjectComparerInstance);

    foreach (SkillObject skill in candidates)
    {
        // 去重必须用 SkillId；用 Name 会把同名技能错误合并。
        if (skill.Attributes.Contains(attribute) &&
            !bound.Any(s => s.SkillId == skill.StringId))
        {
            bound.Add(new AttributeBoundSkillItemVM(skill));
        }
    }

    return bound;
}
```

拿 `SkillId` 反查回技能对象——因为这一行**不保存 `SkillObject` 引用**：

```csharp
public SkillObject ResolveBack(AttributeBoundSkillItemVM item)
{
    for (int i = 0; i < Skills.All.Count; i++)
    {
        SkillObject skill = Skills.All[i];
        if (skill.StringId == item.SkillId)
        {
            return skill;
        }
    }

    return null;
}
```

用 `SkillId`（而不是 `Name`）做跨会话持久化的键：

```csharp
public string BuildStableKeyForLoadout(List<AttributeBoundSkillItemVM> skills)
{
    // 用 SkillId 而非 Name：改名技能不会让存档里的键失效。
    string[] ids = skills.Select(s => s.SkillId).OrderBy(s => s, System.StringComparer.Ordinal).ToArray();
    return string.Join("|", ids);
}
```

## 风险与边界

- **生命周期成本为零**：无字段、无监听、无 `OnFinalize`、无 native 句柄。外层 `BoundSkills.Clear()` 即回收全部。**继承它不会带来任何释放义务。**
- **构造后完全冻结**。`RefreshValues` 未覆写，所以外部即使显式调 `base.RefreshValues()` 也不会更新任何东西。想刷新只能整批重建。
- **不保存 `SkillObject`**。从这一行拿回技能对象必须用 `SkillId` 回查 `Skills.All`。这不是性能问题，是**能力边界**：行本身没有能力告诉你技能的其它任何属性。
- **`Name` 是快照，不是 `TextObject` 引用**。语言切换后这一行的文字陈旧，直到外层重建。对比 `ActionVisualOrder` 存的是 `TextObject` 引用——两者策略不同，不要混用假设。
- **`skill.Name` / `skill.StringId` 无 null 检查**。传进一个字段为 null 的 `SkillObject`（理论上不该发生）会在构造时 NRE。
- **排序不是本类的责任**。传入顺序即显示顺序。想让它有序必须在构造前排序。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。`SkillId` 是字符串，适合你自己当持久化键用（示例 3），但本类不提供任何存档接口。
- **native 边界**：无。纯托管。`SkillObject` 本身是战役侧数据对象，但本类只在构造时读它一次。
- **跨版本**：`CharacterAttributeItemVM.cs:271-280` 的筛选与去重写法、`CampaignUIHelper.SkillObjectComparerInstance` 这个共享排序器实例、以及 `Skills.All => Campaign.Current.AllSkills` 的实现都是 v1.4.5 的形状。上游若改变属性筛选规则或改用别的排序器，外层行为会变而本类不变。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 只用到基类的属性变更通知，本类没有任何自己的逻辑
- ↔ 同级：[CharacterAttributeItemVM](../CharacterAttributeItemVM) —— **唯一的构造方与持有方**，`RefreshWithCurrentValues()` 第 271-280 行
- ↔ 同级：[CampaignUIHelper](../CampaignUIHelper) —— 提供共享的 `SkillObjectComparerInstance` 排序器
- → 技能对象：[SkillObject](../../core-extra/SkillObject) —— 构造参数；本类只从中取 `Name` 与 `StringId`
- → 属性对象：[Hero](../../campaign/Hero)、`TaleWorlds.CampaignSystem.CharacterDevelopment.CharacterAttribute`
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList)
- → 全量技能表：`Skills`（静态类，`All` 属性转发到 `Campaign.Current.AllSkills`）
