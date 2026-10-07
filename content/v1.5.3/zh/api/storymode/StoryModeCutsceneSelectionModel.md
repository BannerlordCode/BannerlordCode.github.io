---
title: "StoryModeCutsceneSelectionModel"
description: "过场动画选择模型：玩家支持的王国覆灭时改播主线专属的版本，其余情况原样转发。"
---
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`（继承自 `MBGameModel<CutsceneSelectionModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs`

## 概述

这个模型回答一个很窄的问题：某个王国覆灭时，播哪一个 `SceneNotificationData`（那段地图上的场景过场/弹出提示）。StoryMode 的唯一改动是——如果被消灭的正好是玩家当前支持的王国，就返回一个专门的 `SupportedFactionDefeatedSceneNotificationItem`，并把「玩家是否正在帝国任务线上」作为参数传进去，好让那段过场播放对应的后续台词。不是玩家支持的王国，则原样交给基类选。

## 心智模型

注册方式 `campaignGameStarter.AddModel<CutsceneSelectionModel>(new StoryModeCutsceneSelectionModel())`。调用时机非常窄：**一次王国被消灭、进入覆灭结算时**。选出来的 `SceneNotificationData` 被压进过场队列，交给场景系统播。

判定条件有两项，都来自主线状态而非模型自身状态：

- `StoryModeManager.Current.MainStoryLine.PlayerSupportedKingdom == kingdom` —— 玩家的支持对象就是被灭的王国。`PlayerSupportedKingdom` 是主线推进时写入的字段，任何「选边」流程改变它，这里的输出立刻跟着变。
- `IsOnImperialQuestLine` —— 传给 `SupportedFactionDefeatedSceneNotificationItem` 的构造参数，决定过场播放哪一套文本。

**顺序为什么重要**：这里没有任何多个模型叠加的数值运算，纯粹是「选哪一个对象」。但如果 mod 也覆写 `CutsceneSelectionModel` 并且同样针对支持王国返回自己的类型，谁后注册谁的分支先被命中——`GetModel<T>()` 倒序查找意味着**最外层是你的**，`base.BaseModel` 是 StoryMode 的。

**常见误用与坑**

- **参数顺序容易看反。** `GetKingdomDestroyedSceneNotification(Kingdom kingdom)` 收的是「被消灭的那个王国」，不是「玩家支持的王国」。传错会走错分支。
- **`PlayerSupportedKingdom` 可能为 null。** 主线尚未选边时比较结果为 false，安全落到基类。
- **这个模型不管王国覆灭本身是否发生。** 它只是过场动画的选择器；「哪些王国允许被消灭」由 [StoryModeKingdomDecisionPermissionModel](../StoryModeKingdomDecisionPermissionModel) 和 [ThirdPhaseCampaignBehavior](../ThirdPhaseCampaignBehavior) 决定。
- **别指望改它能改台词。** 它只决定播哪一个 `SceneNotificationData` 实例；文本内容在游戏文本表里。

## 怎么用

### 怎么拿到它

`public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs:10`，全文 22 行，**全文只有一个 override**。

注册点：`campaignGameStarter.AddModel<CutsceneSelectionModel>(new StoryModeCutsceneSelectionModel())`（`StoryModeSubModule.cs:107`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.CutsceneSelectionModel`。

`GetKingdomDestroyedSceneNotification(Kingdom kingdom)`（`:13`）的唯一分支是 `StoryModeManager.Current.MainStoryLine.PlayerSupportedKingdom == kingdom`（`:15`）——**引用相等**，因为 `PlayerSupportedKingdom` 是在 `MainStoryLine.SetStoryLineSide` 里赋的 `Clan.PlayerClan.Kingdom`（`MainStoryLine.cs:143`），带 `[SaveableProperty(8)]`（`MainStoryLine.cs:74`）。成立时 `return new SupportedFactionDefeatedSceneNotificationItem(kingdom, StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine)`（`:17`）；第二个参数是 `bool`，用来区分「玩家支持的王国」与主线是否走帝国线。

不成立则 `base.BaseModel.GetKingdomDestroyedSceneNotification(kingdom)`（`:19`）。调用方是场景通知选择流程，在王国覆灭结算时触发。

### 典型用法

```csharp
// 运行期读
CutsceneSelectionModel cutscene = Campaign.Current.Models.CutsceneSelectionModel;

// 模拟「玩家支持的王国被灭掉」这条路径
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
Kingdom target = line.PlayerSupportedKingdom;
if (target != null)
{
    SceneNotificationData data = cutscene.GetKingdomDestroyedSceneNotification(target);
    Debug.Print("玩家支持的王国=" + target.StringId + "，通知类型=" + data.GetType().Name);
    // 原生播放入口（见 SandBox/CampaignBehaviors/DefaultCutscenesCampaignBehavior.cs:125）
    MBInformationManager.ShowSceneNotification(data);
}

// 非支持王国走基类：注意 base.BaseModel 才是 SandBox 那个
Kingdom other = Kingdom.Find("vlandia");
SceneNotificationData fallback = cutscene.GetKingdomDestroyedSceneNotification(other);
Debug.Print("非支持王国通知类型=" + fallback.GetType().Name);
```

### 最容易踩的坑

`PlayerSupportedKingdom == kingdom` 是**引用相等**。`PlayerSupportedKingdom` 只在 `MainStoryLine.SetStoryLineSide` 被赋值一次（`MainStoryLine.cs:143`），那之后玩家所属氏族的王国如果因为分家、附庸、叛离而变动，这个引用不会跟着更新——它指向的是**选边那一瞬间的 `Clan.PlayerClan.Kingdom` 对象**。一旦玩家换到另一个王国，本该走基类普通通知的场景仍会走进 `SupportedFactionDefeatedSceneNotificationItem` 分支，播错过场动画。mod 里若需要跟随当前王国，用 `Clan.PlayerClan.Kingdom` 自己判，不要复用这个缓存字段。

## 主要成员

- `GetKingdomDestroyedSceneNotification(Kingdom kingdom)`
  返回该王国覆灭时要播放的场景通知数据。玩家支持的王国 → `new SupportedFactionDefeatedSceneNotificationItem(kingdom, StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine)`；否则透传 `BaseModel`。**由王国覆灭流程调用**，mod 不需要主动触发。

## 使用示例

```csharp
// 场景：mod 想在玩家支持王国覆灭时额外播一段自己的过场
public class MyCutsceneSelectionModel : CutsceneSelectionModel
{
    public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
    {
        if (StoryModeManager.Current.MainStoryLine.PlayerSupportedKingdom == kingdom)
        {
            // 先问链条上一层拿到它的选择，自己决定要不要替换
            SceneNotificationData upstream = base.BaseModel.GetKingdomDestroyedSceneNotification(kingdom);
            Debug.Print("player faction fell: " + kingdom.Name + " -> " + upstream);
            return upstream;
        }
        return base.BaseModel.GetKingdomDestroyedSceneNotification(kingdom);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **与主线选边强耦合**：任何绕过主线 UI 直接改 `PlayerSupportedKingdom` 的 mod，都会让这段过场播错分支；反之，砍掉选边流程的 mod 会永远走基类。
- **`SceneNotificationData` 的构造依赖主线状态**：`IsOnImperialQuestLine` 只在构造那一刻读取，之后不再更新。若剧情在中途切到另一条任务线，已入队的过场不会改。
- **只有一个覆写方法，链极短**：调试时若覆写不生效，先确认自己的 `AddModel` 排在 StoryMode 之后。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<CutsceneSelectionModel>` 的注册位置
- [MBGameModel](../../core-extra/MBGameModel) — 单方法链式覆写所依赖的 `BaseModel`
- [StoryModeKingdomDecisionPermissionModel](../StoryModeKingdomDecisionPermissionModel) — 决定哪些王国之间还能宣战/停战，间接影响谁会覆灭
- [ThirdPhaseCampaignBehavior](../ThirdPhaseCampaignBehavior) — 阻止主线第三阶段的反对派王国被废止的行为
- [module-map](../../../architecture/module-map) — StoryMode 模块在模块图中的位置