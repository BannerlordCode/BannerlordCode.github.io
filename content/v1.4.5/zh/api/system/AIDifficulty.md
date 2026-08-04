---
title: "AIDifficulty"
description: "BoardGameHelper 的内嵌棋盘游戏 AI 难度枚举：把 Easy、Normal、Hard 结果传给 SkillLevelingManager，而不是控制 CampaignOptions 的战斗难度。"
---
# AIDifficulty

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum AIDifficulty`（声明在 `BoardGameHelper` 内）  
**基类：** `System.Enum`  
**源码：** `bin/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 一句话职责

`AIDifficulty` 是棋盘游戏结算向技能成长系统传递的离散难度标签。它只描述本次棋盘游戏对手的难度，不读取或修改全局战斗 AI 选项，也不是一个可配置的难度模型。

## 心智模型：结算输入，不是设置项

源码把它声明为 `BoardGameHelper.AIDifficulty` 的嵌套枚举，成员只有 `Easy`、`Normal`、`Hard` 和 `NumTypes`。真正消费它的是 `SkillLevelingManager.OnBoardGameWonAgainstLord(Hero, BoardGameHelper.AIDifficulty, bool)`；默认技能管理器按这个值选择棋盘游戏胜利的技能经验分支。

因此要区分两个同名语境：

- `BoardGameHelper.AIDifficulty` 是一次棋盘游戏结果的输入标签。
- `CampaignOptions.CombatAIDifficulty` 使用的是另一套 `Difficulty` 枚举，供 `DifficultyModel` 计算战斗 AI 倍率；它不是这个类型的别名。

`NumTypes` 是枚举计数/哨兵值，不是一个可传给结算方法的实际难度。不要把它显示给玩家、当成 Hard，或保存为自定义难度配置。

## 枚举成员与时机

| 成员 | 语义 | 使用边界 |
| --- | --- | --- |
| `Easy` | 棋盘游戏对手处于简单难度 | 作为真实棋盘游戏结束结果传给技能成长逻辑。 |
| `Normal` | 棋盘游戏对手处于普通难度 | 作为普通难度胜利的结算标签；它不会改写当前 Campaign 选项。 |
| `Hard` | 棋盘游戏对手处于困难难度 | 作为困难难度胜利的结算标签；它不会让对手临时变难。 |
| `NumTypes` | 成员数量哨兵 | 只用于内部计数或范围判断；不要作为游戏结果传入。 |

## 真实使用路径

正常流程由棋盘游戏系统在确定胜负和对手英雄后调用技能成长管理器。Mod 如果确实实现了一个与原版等价的棋盘游戏结算适配，应传入当前战役中的真实英雄，并且只在胜利已经确认后调用：

```csharp
using TaleWorlds.CampaignSystem;
using Helpers;

public static void ReportNormalBoardGameWin()
{
    if (Campaign.Current == null || Hero.MainHero == null)
    {
        return;
    }

    BoardGameHelper.AIDifficulty difficulty = BoardGameHelper.AIDifficulty.Normal;
    SkillLevelingManager.OnBoardGameWonAgainstLord(
        Hero.MainHero,
        difficulty,
        extraXpGain: false);
}
```

这段调用会进入技能成长流程，不能用来“查询当前难度”。如果只是显示棋盘游戏设置，应回到棋盘游戏界面自己的状态；如果要计算战斗 AI 倍率，应使用 [Campaign](../../campaign/Campaign)、`CampaignOptions` 和相应的 `DifficultyModel`。

## 依赖与边界

- `BoardGameHelper` 声明这个嵌套枚举，但它不保存当前棋盘游戏实例或胜负状态；相关类型页：[BoardGameHelper](../BoardGameHelper)。
- [SkillLevelingManager](../../campaign/SkillLevelingManager) 接收枚举并把胜利转换为技能成长；默认分支实现见 [DefaultSkillLevelingManager](../../campaign/DefaultSkillLevelingManager)。
- [Campaign](../../campaign/Campaign) 和 [Hero](../../campaign/Hero) 提供有效战役与对手/玩家英雄；主菜单、读档拆卸阶段或没有 `Hero.MainHero` 时不能调用结算入口。
- 棋盘游戏结束事件由 [CampaignEvents](../../campaign/CampaignEvents) 发布；订阅事件时保存事件提供的真实英雄和状态，不要从枚举反推胜负。

## 风险与版本说明

- 直接调用 `SkillLevelingManager.OnBoardGameWonAgainstLord` 是有副作用的技能经验结算，不是无副作用的分类函数；重复调用会重复奖励。
- 枚举成员的数值顺序不是稳定的存档协议。存档或配置应保存自己的语义 ID，并在运行时映射到 `Easy`/`Normal`/`Hard`。
- 不要把 `NumTypes` 传入默认技能管理器；它不代表一种难度，未来分支也可能把它当越界值处理。
- `AIDifficulty` 与 `CampaignOptions.CombatAIDifficulty` 的类型和生命周期不同；混用会让棋盘游戏奖励和战斗倍率分别落入错误系统。

## 导航

- ↑ 父级：[`api/system`](../)
- ↔ 同级：[BoardGameHelper](../BoardGameHelper) · [DistanceHelper](../DistanceHelper)
- 相关：[SkillLevelingManager](../../campaign/SkillLevelingManager) · [CampaignEvents](../../campaign/CampaignEvents) · [Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero)
- English: [AIDifficulty](../../../../en/api/system/AIDifficulty)

