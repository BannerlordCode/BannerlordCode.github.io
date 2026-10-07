---
title: "StoryModeBanditDensityModel"
description: "全局压住强盗生成密度：主线限制玩家交互的阶段里把所有藏身处数量与强盗上限直接归零。"
---
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`（继承自 `MBGameModel<BanditDensityModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## 概述

这个模型负责世界地图上「强盗该有多少」的所有数量上限：每个藏身处周围能有多少强盗队伍、每个藏身处里塞多少、每个强盗派系能开多少个藏身处、开局撒多少个藏身处，以及每个氏族能养多少掠夺者。它的 StoryMode 实现只反复判断同一个条件——`StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted`。为真就把数字清零，否则原样透传。剩下十来个成员（藏身处突袭的兵力上下限、首战生成比例、海上安全区判定等）全部直接转发，不做任何改动。

## 心智模型

注册点在 [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<BanditDensityModel>(new StoryModeBanditDensityModel())`。之后 `Campaign.Current.Models.BanditDensityModel` 就指向这一层，世界地图的强盗系统（藏身处初始化、每日刷新、海上遭遇）在需要数字时随时来问。

被真正归零的只有五个入口，判定条件完全一致：

| 成员 | 被清零后意味着 |
|---|---|
| `NumberOfMaximumBanditPartiesAroundEachHideout` | 藏身处周围不再生成游荡强盗队 |
| `NumberOfMaximumBanditPartiesInEachHideout` | 藏身处袭击战里不再塞额外强盗队 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | 强盗派系地图上不再新增藏身处 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | 开局不预置藏身处 |
| `GetMaxSupportedNumberOfLootersForClan` | 各氏族掠夺者数量为 0 |

**顺序为什么重要**：这五项里有 `NumberOfInitialHideoutsAtEachBanditFaction` 与 `NumberOfMaximumHideoutsAtEachBanditFaction`，它们参与的是**新战役建立时的一次性生成**。模型在战役启动期注册完毕，之后世界初始化才跑——所以你的 `AddModel` 必须发生在同一趟 `InitializeGameStarter` 里。事后再注册，只会影响之后新读档时补生成的藏身处，开局布局早定死了。

`IsPlayerInteractionRestricted` 是主线阶段推进器的开关，教学阶段与若干任务期间为 true。StoryMode 的另一处配套动作在 [StoryModeBanditSpawnCampaignBehavior](../StoryModeBanditSpawnCampaignBehavior)：教程跳过时它手动调原版 `BanditSpawnCampaignBehavior` 的三个初始化方法，把开局强盗补种回来。

**常见误用与坑**

- **想「调低密度」却写成 `return 0`。** 这五项归零是全有全无的开关，不是倍率。想做 50%，必须自己取基类值再乘。
- **别在 getter 里假设 `StoryModeManager.Current` 永远非空。** 这些属性是即时查询式的 getter，任何模组在任何时刻读 `Campaign.Current.Models.BanditDensityModel.NumberOfMaximumHideoutsAtEachBanditFaction` 都会走进 StoryMode 代码。此时若战役尚未初始化就是 NRE。
- **透传成员不是「未实现」。** `GetMaximumTroopCountForHideoutMission`、`GetMinimumTroopCountForHideoutMission`、`IsPositionInsideNavalSafeZone` 这些全部原样转发给 `BaseModel`，它们仍然生效——只是不再是 StoryMode 的责任。
- **`BaseModel` 可能是原版也可能是别人的模型。** 再次强调 `GetModel<T>()` 倒序查找，后注册者赢。

## 怎么用

### 怎么拿到它

`public class StoryModeBanditDensityModel : BanditDensityModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBanditDensityModel.cs:9`，全文 145 行。

注册点：`campaignGameStarter.AddModel<BanditDensityModel>(new StoryModeBanditDensityModel())`（`StoryModeSubModule.cs:91`），同样只在主线战役里生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.BanditDensityModel`，拿到的是 StoryMode 版，基类内部用 `base.BaseModel` 透传回 SandBox。

十三个 override 里**只有五个带主线判断**，其余全是纯透传：

| 成员 | 声明行 | 教学限制下返回 |
| --- | --- | --- |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `:13` | `0`（`:19`） |
| `NumberOfMaximumBanditPartiesInEachHideout` | `:27` | `0`（`:33`） |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `:41` | `0`（`:47`） |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `:55` | `0`（`:61`） |
| `GetMaxSupportedNumberOfLootersForClan(Clan clan)` | `:130` | `0`（`:134`） |

判据统一是 `StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted`——也就是「教学未完成 **且** 还没选边」（`MainStoryLine.cs:19`→`:23`）。

纯透传的那八个：`NumberOfMinimumBanditPartiesInAHideoutToInfestIt`（`:69`）、`NumberOfMinimumBanditTroopsInHideoutMission`（`:79`）、`NumberOfMaximumTroopCountForFirstFightInHideout`（`:89`）、`NumberOfMaximumTroopCountForBossFightInHideout`（`:99`）、`SpawnPercentageForFirstFightInHideoutMission`（`:109`）、`GetMaximumTroopCountForHideoutMission(MobileParty, bool)`（`:118`）、`IsPositionInsideNavalSafeZone(CampaignVec2)`（`:124`）、`GetMinimumTroopCountForHideoutMission(MobileParty, bool)`（`:140`）。**注意最后三个方法没有主线分支，藏身处战斗规模在教学期照常生效。**

### 典型用法

```csharp
// 运行期读
BanditDensityModel density = Campaign.Current.Models.BanditDensityModel;
Debug.Print("每个藏身处周边最多队伍=" + density.NumberOfMaximumBanditPartiesAroundEachHideout);

// 直接问「现在是不是被限制」：教学未完成且未选边
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
if (line.IsPlayerInteractionRestricted)
{
    Debug.Print("限制中：藏身处不会刷新，掠夺者上限为 0");
}

// mod 侧覆写：想在主线之外也压制藏身处，自己注册
public class MyBanditDensityModel : BanditDensityModel
{
    public override int NumberOfMaximumBanditPartiesAroundEachHideout
        => StoryModeManager.Current != null
            && StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted
            ? 0 : BaseModel.NumberOfMaximumBanditPartiesAroundEachHideout;
}

// 战斗规模类成员是透传的，教学期也照常算
MobileParty raiders = MobileParty.CreateParty(PartyTemplateManager.DefaultRaiderPartyTemplate);
Debug.Print("藏身处最少守军=" + density.GetMinimumTroopCountForHideoutMission(raiders, true));
```

### 最容易踩的坑

看到「教学期藏身处归零」就以为藏去处整个死掉了。归零的只有**刷新上限和掠夺者数量**这五个（`:13`、`:27`、`:41`、`:55`、`:130`），而 `NumberOfInitialHideoutsAtEachBanditFaction` 虽然也返 0，它只影响新藏处处的**初始生成数**；已经在地图上存在的藏出处不会被清掉，`GetMinimumTroopCountForHideoutMission`（`:140`）和 `GetMaximumTroopCountForHideoutMission`（`:118`）更是完全没有主线分支。玩家仍然能撞进已经存在的藏出处并打完一场。想彻底关掉，得同时限制这几个方法。

## 主要成员

- `NumberOfMaximumBanditPartiesAroundEachHideout` / `NumberOfMaximumBanditPartiesInEachHideout` / `NumberOfMaximumHideoutsAtEachBanditFaction` / `NumberOfInitialHideoutsAtEachBanditFaction`（`int` 属性）
  四个数量闸门，剧情限制期一律返回 0，否则返回 `BaseModel` 的值。**你不需要直接调用它们**；藏身处逻辑会问。
- `GetMaxSupportedNumberOfLootersForClan(Clan clan)`
  给定氏族，掠夺者的数量上限。剧情限制期返回 0。日常刷新掠夺者时调用。
- `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`、`NumberOfMinimumBanditTroopsInHideoutMission`、`NumberOfMaximumTroopCountForFirstFightInHideout`、`NumberOfMaximumTroopCountForBossFightInHideout`、`SpawnPercentageForFirstFightInHideoutMission`
  突袭战内部的兵力刻度，原样透传。想改藏身处战斗强度应该改这些，而不是上面五个。
- `GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` / `GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)`
  按具体队伍算上下限，透传。突袭战生成前询问。
- `IsPositionInsideNavalSafeZone(CampaignVec2 position)`
  判断地图坐标是否落在海上安全区（避免藏身处贴着海岸生成），透传。海图刷新路径调用。

## 使用示例

```csharp
// 自己的模型：保留剧情归零，但把上限压到基线的 40%
public class MyBanditDensityModel : BanditDensityModel
{
    public override int NumberOfMaximumHideoutsAtEachBanditFaction
    {
        get
        {
            if (StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted)
            {
                return 0;
            }
            return (int)(base.BaseModel.NumberOfMaximumHideoutsAtEachBanditFaction * 0.4f);
        }
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<BanditDensityModel>(new MyBanditDensityModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，读档不恢复任何东西。
- **开局生成不可逆**：藏身处初始布局在世界初始化时定下，读档不会重跑这部分。读档后改模型只影响增量刷新。
- **多 mod 相乘的放大效应**：每个覆写都取 `BaseModel` 的值再加工，A 乘 0.5、B 再乘 0.5 就是 0.25——链式衰减很容易失控。覆写前先确认链上还有谁。
- **不要指望靠它删掉已存在的藏身处**：归零只阻止新建与刷新，不会销毁地图上已有的藏身处实体。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口，`AddModel<BanditDensityModel>` 在 `StoryModeSubModule.AddModels` 中调用
- [MBGameModel](../../core-extra/MBGameModel) — `BaseModel` 属性的来源，决定透传落到哪一层
- [StoryModeBanditSpawnCampaignBehavior](../StoryModeBanditSpawnCampaignBehavior) — 教程跳过时手动补种强盗与藏身处的配套行为
- [module-map](../../../architecture/module-map) — StoryMode 模块在整体模块图中的位置