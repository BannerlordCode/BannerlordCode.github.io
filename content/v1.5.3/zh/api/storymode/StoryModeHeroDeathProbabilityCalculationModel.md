---
title: "StoryModeHeroDeathProbabilityCalculationModel"
description: "英雄在地图事件中被俘或战死的概率模型，主线未完成前保证玩家的兄长绝不死在野外遭遇里。"
---
# StoryModeHeroDeathProbabilityCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`（继承自 `MBGameModel<HeroDeathProbabilityCalculationModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs`

## 概述

地图事件结束时，对于参战的英雄，游戏要掷一次「这个人会不会死」。这就是本模型的全部职责——`CalculateHeroDeathProbability(Hero hero)` 返回一个 0 到 1 之间的概率。StoryMode 只加一条保护：主线故事尚未完成时，玩家的兄长 `StoryModeHeroes.ElderBrother` 概率恒为 0。其余所有英雄的概率完全由基类算，StoryMode 一个数字都不改。

## 心智模型

注册方式 `campaignGameStarter.AddModel<HeroDeathProbabilityCalculationModel>(new StoryModeHeroDeathProbabilityCalculationModel())`。运行期由地图事件结算流程逐个询问参战英雄，取回概率后掷骰。注意它是**逐英雄**调用，不是一次算全场的分布——所以「比较谁的概率更高」这类玩法在本模型下没有意义。

判定只有两行：

```
if (hero == StoryModeHeroes.ElderBrother && !StoryModeManager.Current.MainStoryLine.IsCompleted)
    return 0f;
return base.BaseModel.CalculateHeroDeathProbability(hero);
```

用的是引用比较 `==`。`StoryModeHeroes` 是一个静态属性集合，每次访问都返回全局单例的同一个 `Hero` 实例，所以引用相等成立。这也是为什么 mod 若把兄长 hero 对象整体替换（换一个新的 `Hero` 实例），这层保护会静默失效。

**顺序为什么重要**：这是一条纯短路规则，没有任何数值叠加语义。链上任何一层先返回 0 就终止；任何一层先返回非 0 就直接成为结果而不看下一层——除非它自己决定透传。所以覆写时先问自己：我要不要透传，还是直接决定。

**常见误用与坑**

- **保护的是「死亡」不是「受伤」。** 返回 0 之后英雄仍会被俘、被押送、被关进监狱。想连俘虏一起防，得看 [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) 的 `CanHeroDie` 与相关事件。
- **战斗内的死亡走另一条路。** 任务（Misson）里的 Agent 死亡由 [StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel) 判定。两个模型互不知晓，各管各的场景。
- **`IsCompleted` 是主线总完成标志。** 教程阶段、教学后但主线未完，都属于「保护中」。
- **不要试图在这里做难度调节。** 改成 0.05f 之类的小数值在语义上是「有 5% 概率兄长在第三章战死」，属于破坏主线，不是难度调整。

## 怎么用

### 怎么拿到它

`public class StoryModeHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs:9`，全文 21 行，**全文只有一个 override**。

注册点：`campaignGameStarter.AddModel<HeroDeathProbabilityCalculationModel>(new StoryModeHeroDeathProbabilityCalculationModel())`（`StoryModeSubModule.cs:100`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.HeroDeathProbabilityCalculationModel`。

`CalculateHeroDeathProbability(Hero hero)`（`:12`）只有一条分支：`hero == StoryModeHeroes.ElderBrother && !StoryModeManager.Current.MainStoryLine.IsCompleted`（`:14`）——**引用相等**，且两个条件都要成立。成立 `return 0f`（`:16`），否则 `base.BaseModel.CalculateHeroDeathProbability(hero)`（`:18`）。

注意它保护的是**三个剧情角色里的一个**：只有 `ElderBrother`。`StoryModeAgentDecideKilledOrUnconsciousModel` 保护的是 `ElderBrother` + `Radagos` + `RadagosHenchman`（`StoryModeAgentDecideKilledOrUnconsciousModel.cs:16`）——两处名单不一致，这是事实，不是笔误。

调用方是**地图事件结算流程**：谁在这场战斗里死了。参数可以是任意英雄，源码没有判空。

### 典型用法

```csharp
// 运行期读：地图事件结算实际问的就是这个
HeroDeathProbabilityCalculationModel model =
    Campaign.Current.Models.HeroDeathProbabilityCalculationModel;

// 兄长在主线未完成前必不死
bool storyDone = StoryModeManager.Current.MainStoryLine.IsCompleted;
Debug.Print("兄长死亡概率=" + model.CalculateHeroDeathProbability(StoryModeHeroes.ElderBrother)
          + "，主线已完成=" + storyDone);

// 对照：Radagos 在这里没有任何保护，走基类概率
float radagos = model.CalculateHeroDeathProbability(StoryModeHeroes.Radagos);
Debug.Print("拉达戈斯死亡概率=" + radagos);

// mod 侧覆写：把名单补齐
public class MyHeroDeathModel : HeroDeathProbabilityCalculationModel
{
    public override float CalculateHeroDeathProbability(Hero hero)
    {
        if (StoryModeManager.Current == null) return base.CalculateHeroDeathProbability(hero);
        Hero radagos = StoryModeHeroes.Radagos;
        if ((hero == StoryModeHeroes.ElderBrother || hero == radagos)
            && !StoryModeManager.Current.MainStoryLine.IsCompleted)
        {
            return 0f;
        }
        return base.CalculateHeroDeathProbability(hero);
    }
}
```

### 最容易踩的坑

它只保护 `ElderBrother`，而且是**引用相等**——`hero == StoryModeHeroes.ElderBrother`。mod 替换或复制了兄长这个 `Hero`（比如换模型、克隆 NPC），保护立刻失效，主线角色在该死的战斗里会真的死掉，而任务继续推进到下一阶段时才发现剧情英雄不见了。反过来，`base.CalculateHeroDeathProbability(hero)` 这条透传路径**不判空**，你传 null 进去就会在基类里 NRE——这个模型对参数没有任何容错。

## 主要成员

- `CalculateHeroDeathProbability(Hero hero)`
  返回该英雄在本次地图事件中死亡的概率（0 表示必不死，1 表示必死）。兄长且主线未完成时返回 `0f`；否则透传 `BaseModel`。**由地图事件结算流程调用**，参数可以是任意英雄，源码没有判空，调用方保证非空。

## 使用示例

```csharp
// 场景：mod 引入「玩家可以失去兄长」的分支玩法，
// 但只在主线第三阶段之后放开，且仍然走基类概率（不是硬开关）
public class MyHeroDeathProbabilityModel : HeroDeathProbabilityCalculationModel
{
    public override float CalculateHeroDeathProbability(Hero hero)
    {
        MainStoryLine line = StoryModeManager.Current.MainStoryLine;
        if (hero == StoryModeHeroes.ElderBrother
            && !line.IsCompleted
            && line.ThirdPhase == null)
        {
            return 0f;   // 第三阶段之前仍然保护
        }
        return base.BaseModel.CalculateHeroDeathProbability(hero);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<HeroDeathProbabilityCalculationModel>(new MyHeroDeathProbabilityModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **全局单例依赖**：`StoryModeHeroes.ElderBrother` 每次返回同一引用。若 mod 替换或复制了这个 Hero 对象，保护链断裂，且不会有任何报错。
- **与其它 mod 的冲突形态是「短路」而非「叠加」**：两个 mod 都想给兄长改概率时，只有最外层（最后注册）说话，其余全部被跳过。
- **对 AI 阵营无影响**：本模型只对 `hero == ElderBrother` 这一实例生效，所有 AI 英雄的概率由基类决定，不受主线阶段限制。
- **`MainStoryLine` 在非战役上下文为空**：本模型的调用方是地图事件结算，只在战役中运行；自行在其它上下文调用会 NRE。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口，`AddModel<HeroDeathProbabilityCalculationModel>` 位于 StoryMode 的模型装配方法中
- [MBGameModel](../../core-extra/MBGameModel) — `BaseModel` 的来源，单方法链式覆写依赖它
- [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) — 处理主线角色生死/存活/状态的行为，与本模型形成互补
- [StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel) — 战斗内 Agent 死亡的概率模型，管的是另一个场景
- [sdk-overview](../../../architecture/sdk-overview) — SubModule 启动序列与模型装配位置