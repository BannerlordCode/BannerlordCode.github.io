---
title: "StoryModeKingdomDecisionPermissionModel"
description: "王国决策许可模型：第三阶段的反对派王国之间禁战、反对派与盟友之间禁和，其余决策权限原样转发。"
---
# StoryModeKingdomDecisionPermissionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`（继承自 `MBGameModel<KingdomDecisionPermissionModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeKingdomDecisionPermissionModel.cs`

## 概述

玩家（或 AI 领主）能不能对某个王国做某类决策——改政策、吞并聚落、驱逐氏族、选王、宣战、停战、结盟——全部由这个模型回答。StoryMode 只改两项：宣战与停战。第三阶段存在时，反对派王国之间不允许开战；反对派与盟友之间不允许停战。两者被拒绝时都会填上同一个说明文本 `str_kingdom_diplomacy_war_truce_disabled_reason_story`，让玩家在 UI 上看到为什么被驳回。其余五项决策权限原样透传。

## 心智模型

注册方式 `campaignGameStarter.AddModel<KingdomDecisionPermissionModel>(new StoryModeKingdomDecisionPermissionModel())`。调用方是外交与王国界面：玩家点「宣战」/「停战」按钮时先问本模型，返回 false 时连带读出 `out TextObject reason` 显示给玩家。

三组名单都来自 `StoryModeManager.Current.MainStoryLine.ThirdPhase`：

- `OppositionKingdoms` —— 玩家要对抗的那批王国。
- `AllyKingdoms` —— 玩家的盟友。

三个覆写的判定：

| 方法 | 拒绝条件 |
|---|---|
| `IsWarDecisionAllowedBetweenKingdoms(k1, k2, out reason)` | 两边**都在** `OppositionKingdoms` 里 → 拒绝 |
| `IsPeaceDecisionAllowedBetweenKingdoms(k1, k2, out reason)` | 一边在 `OppositionKingdoms`、另一边在 `AllyKingdoms`（任意方向）→ 拒绝 |
| `IsStartAllianceDecisionAllowedBetweenKingdoms(k1, k2, out reason)` | 透传，StoryMode 不限制 |

匹配用 `MBReadOnlyList<Kingdom>.IndexOf(kingdom) >= 0`，即引用相等。第三阶段未建立时 `ThirdPhase` 为 null，直接落基类。

**顺序为什么重要**：这里没有任何数值叠加，被拒绝就是被拒绝。但——**外层可以单方面放行**。如果某个 mod 在 StoryMode 之后注册并对同一决策返回 true，剧情的禁战约束就被解除了。反过来，本层在链上更外层时，StoryMode 的禁令必然生效（除非你代码里透传了 `BaseModel`，而 BaseModel 是被压在下面的 StoryMode）。

**常见误用与坑**

- **只挡宣战和停战，不挡结盟。** 主线里可以拉盟友，尽管剧情上禁止在敌对集团之间结盟。
- **`out TextObject reason` 必须赋值。** 拒绝路径赋 `GameTexts.FindText("str_kingdom_diplomacy_war_truce_disabled_reason_story", null)`，透传路径由基类填。两条路径都要有值，否则 UI 会拿到 null。
- **禁战是双向对称的，停战是交叉的。** 宣战判定要求两边都在反对派；停战判定是一边反对派一边盟友。别把两个条件写混。
- **吞并、驱逐、改政策、选王全部透传。** 「剧情期间王国不许改政策」这种想法不能靠本模型实现，它压根没拦这几项。

## 主要成员

- `IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`
  是否允许这两国宣战。两个王国都出现在 `ThirdPhase.OppositionKingdoms` 中时返回 false 并填入剧情说明文本。
- `IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`
  是否允许停战。交叉出现在反对派与盟友名单里时返回 false 并填入同一说明文本。
- `IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`
  是否允许结盟。**透传**，StoryMode 不做限制。
- `IsPolicyDecisionAllowed(PolicyObject policy)` / `IsAnnexationDecisionAllowed(Settlement annexedSettlement)` / `IsExpulsionDecisionAllowed(Clan expelledClan)` / `IsKingSelectionDecisionAllowed(Kingdom kingdom)`
  四类王国决策权限，全部透传。想限制这些行为应当在此覆写，而非指望 StoryMode 已经拦过。

## 使用示例

```csharp
// 场景：第三阶段同时禁止反对派之间结盟（补上 StoryMode 漏掉的一项）
public class MyKingdomDecisionPermissionModel : KingdomDecisionPermissionModel
{
    public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(
        Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
    {
        ThirdPhase third = StoryModeManager.Current.MainStoryLine.ThirdPhase;
        if (third != null
            && third.OppositionKingdoms.IndexOf(kingdom1) >= 0
            && third.OppositionKingdoms.IndexOf(kingdom2) >= 0)
        {
            reason = GameTexts.FindText(
                "str_kingdom_diplomacy_war_truce_disabled_reason_story", null);
            return false;
        }
        return base.BaseModel.IsStartAllianceDecisionAllowedBetweenKingdoms(
            kingdom1, kingdom2, out reason);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **`ThirdPhase` 为 null 时全部约束消失**。第三阶段一旦未建立或已被主线跳过，所有王国都能互相宣战——这不是 bug，是剧情设计。
- **`reason` 文本硬编码**：两个覆写用同一个游戏文本 id，mod 若想给不同拒绝原因做区分，必须按方法分支提供不同 id。
- **AI 也受限**：这套判定不区分发起方。AI 领主之间的宣战同样被拦，玩家会在外交界面看到 AI 无法宣战的既成事实。
- **与 [ThirdPhaseCampaignBehavior](../ThirdPhaseCampaignBehavior) 的关系**：那个行为在 `WeeklyTickEvent` 里强制把反对派内部、盟友内部刚刚宣下的战争拉成和平，等于是本模型的「事后补救」。两者共同保证名单内的王国不会打成一团，但责任不同——本模型挡按钮，那个行为拆已经建成的战争。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 透传落到 `BaseModel` 的机制
- [ThirdPhaseCampaignBehavior](../ThirdPhaseCampaignBehavior) — 用 `WeeklyTickEvent` + `MakePeaceAction` 强制结束名单内王国的战争，与本模型互补
- [StoryModeCutsceneSelectionModel](../StoryModeCutsceneSelectionModel) — 王国覆灭时的过场选择器，同样依据第三阶段名单
- [module-map](../../../architecture/module-map) — StoryMode 模块在整体结构中的位置