---
title: "BarterGroup"
description: "以物易物系统的分组基类：一个抽象标签，替 BarterData 把 Barterable 按类别归位，并给 AI 决策提供权重 AIDecisionWeight。六种官方实现各带一个权重常量。"
---

# BarterGroup

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BarterGroup`
**Base:** 无（直接继承 object）
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs`

## 概述

`BarterGroup` 整个类只有一行抽象成员：

```csharp
public abstract float AIDecisionWeight { get; }
```

它是**以物易物（barter）系统的分类标记**。作用有两层。第一层是**路由**：[BarterData](../BarterData) 的 `AddBarterable<T>` 会遍历它持有的分组列表，找到第一个 `is T` 的分组，然后把 [Barterable](../Barterable) 挂到那个分组下（`barterable.Initialize(barterGroup, isContextDependent)`）。第二层是**AI 权重**：`AIDecisionWeight` 告诉 AI 在自动交易时多大概率往这个分组里看。

1.4.5 的官方实现由 [DiplomacyModel](../DiplomacyModel) 的 `GetBarterGroups()` 给出，一共六个，权重固定：

| 实现类 | `AIDecisionWeight` |
| --- | --- |
| `DefaultsBarterGroup` | 0.75 |
| `PrisonerBarterGroup` | 0.7 |
| `GoldBarterGroup` | 0.6 |
| `ItemBarterGroup` | 0.5 |
| `OtherBarterGroup` | 0.25 |
| `FiefBarterGroup` | 0.05 |

权重排序非常说明问题：默认项最重，封地最轻。这不是随便排的——它在表达「AI 通常会先考虑能不能直接给东西，其次才是囚犯 / 黄金 / 物品，最后才是领地」。

这个基类**不带任何行为**，没有字段、没有方法、没有生命周期钩子。它是纯粹的「分类 + 权重」契约。

## 心智模型

把它当成**「barter 项目的类型标签 + AI 优先级」**就对了。

- **先有分组，才有 barterable。** [BarterData](../BarterData) 的构造函数从 `Campaign.Current.Models.DiplomacyModel.GetBarterGroups()` 拉一份分组列表。你写的 `Barterable` 只有在 `AddBarterable<T>` 的泛型参数匹配到某个已有分组时才会被加入；**匹配不到就静默丢弃**——方法体里只有一个 `break`，没有 else、没有日志、没有异常。这是最容易踩的坑。
- **`AddBarterable<T>` 取的是第一个匹配。** 官方六个分组互不继承，所以现在没问题；但如果你写一个 `class MyGroup : GoldBarterGroup` 想复用金条行为，`AddBarterable<GoldBarterGroup>` 会命中**列表里排在前面的那个**——可能是 `GoldBarterGroup` 也可能是你的子类，取决于 `GetBarterGroups()` 的顺序。别依赖这个。
- **自定义分组要走 `AddBarterGroup` 或换 DiplomacyModel。** [BarterData](../BarterData) 有 `AddBarterGroup(BarterGroup)` 可以在已有列表上追加，`GetBarterGroups()` 的返回值则会被 `ToList()` 拷贝一份进 `_barterGroups`，所以外部改原数组不影响它。
- **`AIDecisionWeight` 只影响 AI，不影响玩家。** 玩家手动交易时看不到这个数字；它只决定自动交易（`BarterManager` 的 AI 分支）在选项目时的倾向。
- **它是抽象类，必须有实现。** 想在 mod 里加一类「技能点」交易，你至少要写 `public class SkillBarterGroup : BarterGroup { public override float AIDecisionWeight => 0.4f; }`，然后让它出现在 `DiplomacyModel.GetBarterGroups()` 里，并且写一个 `AddBarterable<SkillBarterGroup>` 的 barter 行为。

### 六种官方分组各自承载什么

| 分组 | 承载的 barterable 例子 |
| --- | --- |
| `GoldBarterGroup` | 金币增减（`GoldBarterBehavior`） |
| `ItemBarterGroup` | 物品买卖（`ItemBarterBehavior`） |
| `PrisonerBarterGroup` | 释放 / 交换囚犯（`SetPrisonerFreeBarterBehavior`、`TransferPrisonerBarterBehavior`） |
| `FiefBarterGroup` | 领地易手（`FiefBarterBehavior`） |
| `OtherBarterGroup` | 未归类的杂项，AI 权重最低 |
| `DefaultsBarterGroup` | 每笔交易都自动挂上的兜底项，`BarterManager` 用 `AddBarterable<OtherBarterGroup>(..., isContextDependent: true)` 与 `AddBarterable<DefaultsBarterGroup>(baseBarterable, isContextDependent: true)` 各塞一个 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AIDecisionWeight` | `public abstract float AIDecisionWeight { get; }` | 唯一成员。给 AI 自动交易决策的权重，官方六个实现返回 0.05 到 0.75 之间的常量。**没有上下界校验**——返回 10 或 -1 都不报错，但会让 AI 的选择失衡。**玩家手动交易完全不看它。** |

## 真实示例

列出当前战役可用的全部分组与权重（走真实的 `DiplomacyModel` 入口）：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static string DescribeBarterGroups()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    List<BarterGroup> groups = new List<BarterGroup>(Campaign.Current.Models.DiplomacyModel.GetBarterGroups());
    System.Text.StringBuilder builder = new System.Text.StringBuilder();
    foreach (BarterGroup group in groups)
    {
        builder.Append(group.GetType().Name).Append("=").Append(group.AIDecisionWeight).Append(" ");
    }

    return builder.ToString();
}
```

加一个自定义分组进某笔交易（`AddBarterGroup` 是 [BarterData](../BarterData) 的公开方法，直接追加到它的内部列表）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public class RenownBarterGroup : BarterGroup
{
    public override float AIDecisionWeight => 0.4f;
}

public static void AddCustomGroup(BarterData barterData)
{
    if (barterData == null)
    {
        return;
    }

    barterData.AddBarterGroup(new RenownBarterGroup());
    Debug.Print("group count = " + barterData.GetBarterGroups().Count, 0);
}
```

按权重给分组排序，用于自定义 UI：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static List<BarterGroup> SortedByAiWeight()
{
    List<BarterGroup> groups = new List<BarterGroup>(Campaign.Current.Models.DiplomacyModel.GetBarterGroups());
    groups.Sort((BarterGroup left, BarterGroup right) => right.AIDecisionWeight.CompareTo(left.AIDecisionWeight));
    return groups;
}
```

## 风险与边界

- **`AddBarterable<T>` 匹配不到就静默丢弃。** [BarterData](../BarterData) 的实现是 `foreach ... if (barterGroup is T) { ...; break; }`，没有 else 分支。自定义分组忘了接进 `GetBarterGroups()`，你的 barterable 会凭空消失且没有任何报错。
- **`GetBarterGroups()` 的返回值被 `ToList()` 拷贝。** [BarterData](../BarterData) 构造时拿的是副本；你改 `DiplomacyModel` 返回的原数组，对已经存在的 `BarterData` 无效。
- **`AIDecisionWeight` 无边界校验。** 任意 float 都能编译通过。负数或大于 1 的值会让 AI 的选择变得不可预测。
- **权重只管 AI。** 玩家手动交易走的是 UI 排序逻辑，读不到这个值。别把「AI 权重低」当成「玩家看不到」。
- **继承链会引发 first-match 歧义。** 一个 `MyGroup : GoldBarterGroup` 会被 `AddBarterable<GoldBarterGroup>` 匹配到，命中哪个取决于列表顺序。
- **抽象类，必须实现。** 但它**没有 `sealed` 的官方实现**——六个官方分组都可被继承，也就是说 mod 可以意外地让某个分组语义漂移。
- **`BarterGroup` 不进存档。** 它是一次性交易会话里的临时路由对象；存档存的是交易结果，不是分组。

## 怎么用

### 怎么拿到它

声明在 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs`，`public abstract class`，抽象类，**只有一个抽象成员 `AIDecisionWeight`**，没有构造函数也没有任何字段。

它不由你 new——官方六个实现全部由外交模型现造。真实入口是 `DiplomacyModel.GetBarterGroups()`（抽象声明在 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DiplomacyModel.cs:132`），默认实现 `DefaultDiplomacyModel.cs:1004` 返回一个 `new BarterGroup[6]`，逐个 `new` 出六个组。

六个权重全部写死在各自文件第 5 行，逐条 grep 得到：`GoldBarterGroup.cs:5` = 0.6、`ItemBarterGroup.cs:5` = 0.5、`PrisonerBarterGroup.cs:5` = 0.7、`FiefBarterGroup.cs:5` = 0.05、`OtherBarterGroup.cs:5` = 0.25、`DefaultsBarterGroup.cs:5` = 0.75。注意这个数组是**每次调用现造的新实例**，不是缓存的单例。

`BarterData` 在构造时就把它整份拷走：`BarterData.cs:42` 写的是 `_barterGroups = Campaign.Current.Models.DiplomacyModel.GetBarterGroups().ToList();`。所以「模型改了」不会影响已经开起来的那笔交易——这一条决定了下面所有写法的边界。

### 典型用法

上面「真实示例」两段分别是「列出当前战役可用的分组与权重」和「往一笔交易里加自定义分组」。中间那条路没人写：**怎么把自定义分组接进模型层，让每一笔新交易都带上它**。

```csharp
public class MyBarterGroupModel : MBGameModel<DiplomacyModel>
{
    public override IEnumerable<BarterGroup> GetBarterGroups()
    {
        // DefaultDiplomacyModel.cs:1004 返回的是现造数组；这里要自己拼一个 IEnumerable
        List<BarterGroup> groups = new List<BarterGroup>(this.BaseModel.GetBarterGroups());
        groups.Add(new RenownBarterGroup());
        return groups;
    }
}
```

关键在于**必须转发 `BaseModel`**。默认实现那六个组是硬编码在 `DefaultDiplomacyModel` 的方法体里的，不转发就等于把金币、物品、囚犯、领地四类交易全部删掉。

新增一个组要在两处同时落地：模型层提供实例，`BarterData` 构造时才会把它拷进自己的 `_barterGroups`。少了模型层这一步，你在交易里调 `AddBarterGroup` 加进去的组只对当前这一笔有效，下一笔交易就又没有了。

权重只有 AI 自动交易会读。玩家手动谈判完全不经过它，所以调它不会影响玩家看到的行数或顺序，只会改变 AI 选哪一条。

### 什么时候不要用它

不要给权重设负值或超大值而指望有什么反馈——没有上下界校验，返回 10 或 -1 都不报错，但 AI 的选择会失衡，而这种失衡在测试里表现为「AI 行为诡异」而不是崩溃。

也不要指望改权重能改变玩家侧。上面提到过，`BarterVM` 根本不读这个值。

### 最容易踩的坑

`AddBarterable<T>` 匹配不到就静默丢弃：`BarterData` 的实现是 `foreach ... if (barterGroup is T) { ...; break; }`，没有 else 分支。自定义分组忘了接进 `GetBarterGroups()`，你的 barterable 会凭空消失且没有任何报错。

第二条更隐蔽：模型层的改动对**已经开起来**的那笔交易无效，因为 `_barterGroups` 是构造时一次性 `ToList()` 拷走的。改完模型要新开一笔交易才看得到效果。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs` 是 6 行原始源码：一个命名空间、一层抽象类、一个抽象属性。跨版本要盯的不是这个文件，而是三个外部依赖：`DiplomacyModel.GetBarterGroups()` 是否仍然返回同样的六个实现、`BarterData.AddBarterable<T>` 是否仍是「first-match + 静默丢弃」语义、以及六个实现的权重常量是否被调过。

## 依赖关系

- 唯一成员被谁读：[BarterData](../BarterData) 持有分组列表并用它给 [Barterable](../Barterable) 分派 `Group`；AI 决策读取 `AIDecisionWeight`
- 分组清单来源：[DiplomacyModel](../DiplomacyModel) 的 `GetBarterGroups()` 抽象方法，`DefaultDiplomacyModel` 返回那六个实现
- 六个官方实现：`GoldBarterGroup` / `ItemBarterGroup` / `PrisonerBarterGroup` / `FiefBarterGroup` / `OtherBarterGroup` / `DefaultsBarterGroup`，与 `GoldBarterBehavior` / `ItemBarterBehavior` / `SetPrisonerFreeBarterBehavior` / `TransferPrisonerBarterBehavior` / `FiefBarterBehavior` 一一对应
- 会话容器：[BarterData](../BarterData) 的 `AddBarterGroup` / `GetBarterGroups` / `GetBarterGroup<T>` 是本类型唯一的落地路径
- 同族基类：[Barterable](../Barterable) 的 `Group` 属性保存被分派到的实例
- 桶首页：[campaign API 分区](../)
