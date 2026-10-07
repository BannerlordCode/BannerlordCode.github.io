---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
description: "战斗结算时决定被击中的 Agent 是倒地昏迷还是直接战死的概率模型，主线剧情用它把关键角色从死亡名单上摘下来。"
---
# StoryModeAgentDecideKilledOrUnconsciousModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`（继承自 `MBGameModel<AgentDecideKilledOrUnconsciousModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs`

## 概述

这是「Agent 被打到濒死时，判定他进入昏迷还是直接死亡」的单点概率模型。它不负责伤害结算、不负责尸体生成，只回答一个问题：这一次致命伤落下之后，这个 Agent 会不会真的死。StoryMode 的实现只做减法——把剧情角色、以及教学阶段人数过多的战斗，从「可能死亡」的池子里剔除，其余情况原样转交上一级模型。它不是通用难度调节点，改它会影响整场战斗的死亡节奏。

## 心智模型

它由 [CampaignGameStarter](../../campaign/CampaignGameStarter) 通过 `AddModel<AgentDecideKilledOrUnconsciousModel>(new StoryModeAgentDecideKilledOrUnconsciousModel())` 注册进战役。注册时机在战役启动期，运行期没有任何持有者直接引用它——真正调用它的是任务（Misson）内部的死亡结算流程，通过 `Campaign.Current.Models` 取到这一层的实例。也就是说：**写代码时你永远不需要 new 它，只需要覆写并重新 AddModel**。

三条短路规则按顺序判定：

1. `useSurgeryProbability` 先被硬置为 `1f`，本 StoryMode 实现**从不**使用原版的外科手术概率，命中即返回前不会回到 `BaseModel`。
2. 若被击者 `Character` 是主角团的兄长、拉达戈斯或拉达戈斯的跟班，且 `StoryModeManager.Current.MainStoryLine.IsCompleted` 为 false，直接 `return 0f`——概率 0，意味着「这条状态转移不发生」。
3. 若教学阶段尚未完成，且被击者所在阵营存活人数大于 4，同样 `return 0f`。这条规则的作用是**在教程的战斗规模里彻底关闭死亡**，保证新手不会因为队友误伤而看到剧情角色横死。

三条都不命中时才走 `base.BaseModel.GetAgentStateProbability(...)`，把参数原样透传——注意 `out useSurgeryProbability` 在透传时会被基类覆写，前面赋的 `1f` 不再有效。

**常见误用与坑**

- **注册顺序决定你的 BaseModel 是什么。** `CampaignGameStarter.GetModel<T>()` 是倒序遍历 `_models` 找第一个匹配，所以**后注册的赢**，而 `AddModel<T>` 会把当前链上的那个模型塞进你的 `BaseModel`。StoryMode 注册在前，mod 注册在后；如果你先于 StoryMode 注册，`BaseModel` 就是原版，你等于把剧情保护整个摘掉了。
- **`Mission.Current` 在非战斗上下文会 NRE。** 第二个规则直接摸 `Mission.Current`，这个模型只能在任务存活期间被调用。
- **`return 0f` 不是「概率低一点」，是关闭。** 想微调而不是关停，必须自己实现插值，不要靠返回极小值绕过。
- **教学阶段规则不区分敌我。** 判断用的是 `effectedAgent.Team.Side` 的存活人数，友军规模一大，全场都不会死人。

## 怎么用

### 怎么拿到它

`public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs:10`，全文 27 行，只有**一个**方法 `GetAgentStateProbability(...)`（`:13`）。

拿法：**不要 new**。注册点在 `StoryModeSubModule.AddModels`，`campaignGameStarter.AddModel<AgentDecideKilledOrUnconsciousModel>(new StoryModeAgentDecideKilledOrUnconsciousModel())`（`StoryModeSubModule.cs:101`）。这行在 `InitializeGameStarter` 里、且只在 `game.GameType as CampaignStoryMode != null` 时执行（`StoryModeSubModule.cs:23`→`:24`）。战役跑起来之后，所有人拿到的都是 `Campaign.Current.Models.AgentDecideKilledOrUnconsciousModel`——被基类包了一层，基类内部 `base.BaseModel` 才是 SandBox 的原实现。

调用方是**战斗内**流程：谁被打、被打得多重、用的什么武器，返回被击者进「死亡」还是「昏迷」的概率，以及 `out useSurgeryProbability`。源码里直接摸了两个外部状态：`effectedAgent.Character.IsHero`（`:16`）和 `Mission.Current.GetMemberCountOfSide(effectedAgent.Team.Side)`（`:20`）。

三条短路规则：`useSurgeryProbability = 1f` 先无条件设上（`:15`）；剧情三人组（`ElderBrother` / `Radagos` / `RadagosHenchman`）且主线未完成 → 返 `0f`（必不死，`:16`→`:18`）；教学未完成且被击方所在边人数 > 4 → 返 `0f`（`:20`→`:22`）。都不命中才 `base.BaseModel.GetAgentStateProbability(...)`（`:24`）。

### 典型用法

```csharp
// 覆盖点：只要 AgentDecideKilledOrUnconsciousModel 就接管，不要 new 本类
public class MyAgentStateModel : AgentDecideKilledOrUnconsciousModel
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent, DamageTypes damageType,
        WeaponFlags weaponFlags, out float useSurgeryProbability)
    {
        float vanilla = BaseModel.GetAgentStateProbability(
            affectorAgent, effectedAgent, damageType, weaponFlags, out useSurgeryProbability);
        // 原生 StoryMode 版在 :15 先把 useSurgeryProbability 定成 1f
        return effectedAgent.Character.IsHero ? 0f : vanilla;
    }
}

// 运行期读当前生效的值（已被 StoryModeSubModule.cs:101 换成 StoryMode 版）
AgentDecideKilledOrUnconsciousModel model =
    Campaign.Current.Models.AgentDecideKilledOrUnconsciousModel;
Debug.Print(model is StoryMode.GameComponents.StoryModeAgentDecideKilledOrUnconsciousModel
    ? "主线版已生效" : "其他实现");

// BattleSideEnum 与 Team.Side 决定第二个教学期规则
Debug.Print("敌方人数=" + Mission.Current.GetMemberCountOfSide(BattleSideEnum.Defender));
```

### 最容易踩的坑

`useSurgeryProbability` 是 `out` 参数，而源码在**任何分支里都没给它赋非默认值**——只在开头写了一次 `useSurgeryProbability = 1f;`（`:15`），两个 `return 0f` 的早退路径也带着这个值出去。也就是说「永不死」并不代表「不治疗」：调用方拿到的手术概率仍然是 1。你在派生类里覆写这个方法时如果先 `return 0f` 再忘写 `out` 赋值，C# 会要求你写，但很容易随手写 0，而原生语义是 1。

## 主要成员

- `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`
  唯一入口，返回被击者进入当前状态（死亡/昏迷）的概率。`affectorAgent` 是施加伤害的一方，`effectedAgent` 是被打的一方，`damageType` 与 `weaponFlags` 只在透传基类时才起作用——StoryMode 自己不读它们。`out useSurgeryProbability` 表示是否走外科手术（保命）流程，本实现只在短路返回前把它置为 1，在透传路径上由基类决定。**不要从 mod 侧直接调用它**：它是引擎内部契约，签名稳定但调用时机由任务层掌握。

## 使用示例

```csharp
// 覆写剧情模型：保留剧情保护，但把「教学期人数上限」放宽到 6
public class MyAgentDecideModel : AgentDecideKilledOrUnconsciousModel
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent,
        DamageTypes damageType, WeaponFlags weaponFlags,
        out float useSurgeryProbability)
    {
        useSurgeryProbability = 1f;
        if (!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted
            && Mission.Current.GetMemberCountOfSide(effectedAgent.Team.Side) > 6)
        {
            return 0f;
        }
        // 链到上一级：StoryMode 或原版，取决于注册顺序
        return base.BaseModel.GetAgentStateProbability(
            affectorAgent, effectedAgent, damageType, weaponFlags, out useSurgeryProbability);
    }
}

// 在自己的 SubModule 里注册。放在 StoryMode 之后 = 叠在它上面
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<AgentDecideKilledOrUnconsciousModel>(new MyAgentDecideModel());
}
```

## 风险与边界

- **无存档序列化风险。** 它是无状态模型，字段为空，跨读档无影响；风险全在**读档后重新注册时的链序**上——如果你的 mod 在读档路径上重新 `AddModel`，链会被重新拼一次，`BaseModel` 可能和你首次加载时不同。
- **与其它 mod 的 Model 冲突。** 多个 mod 覆写同一个模型时，链会退化成一条长链，最后一个 `AddModel` 决定入口。任何人返回 `0f` 就等于全局关停该状态转移，无人能绕过。
- **只对 Hero 的 Character 生效。** 规则 2 检查的是 `Character.IsHero`，普通士兵走的是基类逻辑。别指望它保护重要 NPC 士兵。
- **剧情完整性依赖它。** 兄长和拉达戈斯的存活由这条规则兜底；如果你链在 StoryMode 之前注册并透传原版，主线会在某个必然的时刻崩掉。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<T>()` 的调用方，也是模型链的组装顺序来源
- [MBGameModel](../../core-extra/MBGameModel) — `BaseModel` 属性与 `Initialize(T)` 的定义所在，链式覆写的机制源头
- [GameModel](../../core-extra/GameModel) — 模型在 `Campaign.Current.Models` 中的抽象宿主
- [sdk-overview](../../../architecture/sdk-overview) — SubModule 启动序列与模型注册的整体位置