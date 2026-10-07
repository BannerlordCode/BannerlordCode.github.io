---
title: "LordConversationsStoryModeBehavior"
description: "为两位主线导师各注册一段开场白对话行，只在首次一对一交谈时触发，并注入 CONVERSATION_HERO 文本变量。"
---
# LordConversationsStoryModeBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class LordConversationsStoryModeBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/LordConversationsStoryModeBehavior.cs`

## 概述

这是 StoryMode 里最小的一个行为：整个类只做一件事——在会话启动时给对话系统注册三行台词。其中两行是帝国导师与反帝国导师各自的「首次见面自我介绍」，条件是「当前是一对一对话」且「对方就是这位导师」且「这是与他的第一次交谈」；第三行是两位导师共用的开场引入。没有任何存档字段，没有任何游戏菜单，没有任何任务逻辑。

## 心智模型

**注册是无条件的**：`StoryModeSubModule.AddBehaviors` 第一行就是 `campaignGameStarter.AddBehavior(new LordConversationsStoryModeBehavior())`，不受任何主线阶段条件约束。这与 [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) 形成对比——那个行为只在第一阶段未完成时存在。

**唯一的时序链**：

1. `RegisterEvents()` 订阅 `CampaignEvents.OnSessionLaunchedEvent`。
2. 会话启动时 `OnSessionLaunched(CampaignGameStarter)` 被调用，内部只做一件事：`AddDialogs(starter)`。
3. `AddDialogs` 调三次 `starter.AddDialogLine(id, conversationId, nextId, text, condition, consequence, priority, relatedObject)`。

**三次注册的细节**：

| id | 从哪个话题接出 | 条件委托 |
|---|---|---|
| `anti_imperial_mentor_introduction` | `lord_introduction` → `lord_start` | `conversation_anti_imperial_mentor_introduction_on_condition` |
| `imperial_mentor_introduction` | `lord_introduction` → `lord_start` | `conversation_imperial_mentor_introduction_on_condition` |
| `start_default_for_mentors` | `start` → `lord_start` | `start_default_for_mentors_on_condition` |

前两行 priority 都是 150，第三行也是 150。第三行文本是 `{=!}{PLAYER.NAME}...`——用 `!=` 前缀抑制变量替换标记，因此 `{PLAYER.NAME}` 会被原样展开。

**两个 intro 条件判定**：

```
Campaign.Current.ConversationManager.CurrentConversationIsFirst
&& Hero.OneToOneConversationHero == StoryModeHeroes.ImperialMentor / AntiImperialMentor
```

命中时额外调 `StringHelpers.SetCharacterProperties("CONVERSATION_HERO", CharacterObject.OneToOneConversationCharacter, null, false)`，让文本里的 `{CONVERSATION_HERO.FIRSTNAME}` 拿到正确的名字，然后返回 true。

**共用开场行的条件更宽松**：`Hero.OneToOneConversationHero != null && HasMet && (是两位导师之一)`。它不带 `CurrentConversationIsFirst`，所以每次与导师的一对一会话都会出现。

**常见误用与坑**

- **注册只发生一次**。`OnSessionLaunchedEvent` 每个会话触发一次，`AddDialogLine` 幂等与否取决于对话管理器——重复注册不会自动去重，但这个行为不会被重复注册（管理器只 `RegisterEvents` 一次）。
- **`Campaign.Current.ConversationManager` 在条件委托里被直接使用**。条件委托只在对话进行中评估，安全；但若你在别处手动调用这个方法，会 NRE。
- **对话 id 是硬编码字符串**。`lord_introduction`、`lord_start` 必须在对话 XML 里存在，否则这些行永远不会被触发——不报错，只是无声。
- **`CurrentConversationIsFirst` 的语义是「本次对话是该角色的首次」**，不是「本次游戏的第一场对话」。
- **`start_default_for_mentors` 会覆盖掉通用 `start` 话题的其它行**，因为它注册在同一个 `start` 之后。如果 mod 也往 `start` 注册了高 priority 的行，会与之竞争。

## 怎么用

### 怎么拿到它

`public class LordConversationsStoryModeBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/LordConversationsStoryModeBehavior.cs:10`，全文 65 行。

注册点：`campaignGameStarter.AddBehavior(new LordConversationsStoryModeBehavior())`（`StoryModeSubModule.cs:58`）——**这是 `AddBehaviors` 的第一条**。拿实例用 `Campaign.Current.GetCampaignBehavior<LordConversationsStoryModeBehavior>()`。

`RegisterEvents()`（`:13`）**只订阅一个**：`CampaignEvents.OnSessionLaunchedEvent` → `OnSessionLaunched`（`:15`）。`SyncData`（`:19`）是空实现，无字段可存。所以它是一个纯注册器：会话启动时拿到 `CampaignGameStarter`，调 `AddDialogs`（`:24`→`:26`）注册三条对话。

注册的三条（`AddDialogLine`，`:30`）：

| id | 接在哪个节点后 | 走哪个节点 | 条件委托 | 行 |
| --- | --- | --- | --- | --- |
| `anti_imperial_mentor_introduction` | `lord_introduction` | `lord_start` | `conversation_anti_imperial_mentor_introduction_on_condition` | `:32` |
| `imperial_mentor_introduction` | `lord_introduction` | `lord_start` | `conversation_imperial_mentor_introduction_on_condition` | `:33` |
| `start_default_for_mentors` | `start` | `lord_start` | `start_default_for_mentors_on_condition` | `:34` |

三条的**优先级都是 150**——不是 `MainStoryLine.MainStoryLineDialogOptionPriority = 150`（`MainStoryLine.cs:276`）的巧合，是同一数字。

两个介绍句的条件相同：`Campaign.Current.ConversationManager.CurrentConversationIsFirst && Hero.OneToOneConversationHero == StoryModeHeroes.ImperialMentor`（`:40`）/ `AntiImperialMentor`（`:51`），命中后先 `StringHelpers.SetCharacterProperties("CONVERSATION_HERO", CharacterObject.OneToOneConversationCharacter, null, false)`（`:42`、`:53`）再返回 true。第三条更宽松：`Hero.OneToOneConversationHero != null && .HasMet && (是两位导师之一)`（`:62`）。

### 典型用法

```csharp
// 运行期读：这个行为只负责注册对话，实例本身没有可读状态
LordConversationsStoryModeBehavior convos =
    Campaign.Current.GetCampaignBehavior<LordConversationsStoryModeBehavior>();
Debug.Print("对话注册行为在位=" + (convos != null));

// 复现原生条件：与帝国导师的首次对话才放 introduction
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
bool isFirst = Campaign.Current.ConversationManager.CurrentConversationIsFirst;
bool withImperialMentor = isFirst && Hero.OneToOneConversationHero == StoryModeHeroes.ImperialMentor;
Debug.Print("帝国导师介绍句=" + withImperialMentor);

// 第三条：已见过任一导师的默认开场
Hero partner = Hero.OneToOneConversationHero;
Debug.Print("导师默认开场=" + (partner != null && partner.HasMet
    && (partner == StoryModeHeroes.AntiImperialMentor || partner == StoryModeHeroes.ImperialMentor)));

// mod 侧：注册自己的对话节点（同样在 OnSessionLaunchedEvent 里）
CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, starter =>
{
    starter.AddDialogLine("my_line_id", "lord_introduction", "lord_start",
        "{=Abc123}My custom line", null, null, 149, null);
});
```

### 最容易踩的坑

两个介绍句都要求 `CurrentConversationIsFirst`（`:40`、`:51`）——**只有一对一对话的第一次选词才放**。玩家第二次跟同一位导师对话（同一场对话里的后续轮次、或重开一场对话），介绍句不再出现，走的是第三条 `start_default_for_mentors` 或基线的普通台词。而三条的 `priority` 都硬编码 150（`:32`–`:34`），mod 若用同一个 150 注册自己的 `lord_start` 分支，排序结果依赖注册顺序而非数值大小，会出现难以复现的抢话。

## 主要成员

- `public override void RegisterEvents()`
  只订阅 `OnSessionLaunchedEvent`。**注册条件是本行为无条件的唯一原因**。
- `public override void SyncData(IDataStore dataStore)`
  **空实现**。不写任何存档字段，读档后行为完全无状态。
- 私有 `OnSessionLaunched(CampaignGameStarter campaignGameStarter)`
  唯一逻辑：`this.AddDialogs(campaignGameStarter)`。
- 私有 `AddDialogs(CampaignGameStarter starter)`
  三次 `AddDialogLine` 注册，含硬编码的对话文本与 priority。
- 私有 `conversation_imperial_mentor_introduction_on_condition()` / `conversation_anti_imperial_mentor_introduction_on_condition()`
  两个 intro 行的条件委托。命中时注入 `CONVERSATION_HERO` 文本变量。
- 私有 `start_default_for_mentors_on_condition()`
  共用开场行的条件委托。不注入文本变量，只判英雄身份与 `HasMet`。

## 使用示例

```csharp
// 场景：mod 想给导师换一套自我介绍（不改 StoryMode，追加更高 priority 的一行）
public class MentorDialogBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent
            .AddNonSerializedListener(this, OnSessionLaunched);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        // priority 高于 StoryMode 的 150，才能在同一话题里排在前面
        starter.AddDialogLine(
            "my_mod_mentor_intro",
            "lord_introduction",
            "lord_start",
            "{=myModKey}My name is {CONVERSATION_HERO.FIRSTNAME}. Let us talk plainly.",
            new ConversationSentence.OnConditionDelegate(OnCondition),
            null,
            200,
            null);
    }

    private bool OnCondition()
    {
        Hero other = Hero.OneToOneConversationHero;
        if (!Campaign.Current.ConversationManager.CurrentConversationIsFirst || other == null)
        {
            return false;
        }
        if (other != StoryModeHeroes.ImperialMentor && other != StoryModeHeroes.AntiImperialMentor)
        {
            return false;
        }
        // 必须自己注入变量，StoryMode 的注入只发生在它自己的条件里
        StringHelpers.SetCharacterProperties(
            "CONVERSATION_HERO", CharacterObject.OneToOneConversationCharacter, null, false);
        return true;
    }
}
```

## 风险与边界

- **无存档序列化风险**：`SyncData` 是空实现，零字段。这是本层最轻的行为。
- **对话 id 的隐式契约**：本行为只提供「台词 → 话题 id」的映射，话题本身必须由对话数据定义。任何一个 id 对不上，这三行全部静默失效，mod 开发者看不到任何报错。
- **条件委托捕获 `this`**：`AddDialogLine` 的条件是对本行为实例方法的引用，行为被 `RemoveListeners` 或战役结束后这些委托变成悬空引用——对话管理器会在每次会话重建，通常安全，但跨战役复用实例（不要这样做）会出问题。
- **与剧情的耦合是「身份匹配」而非「任务阶段」**：`HasMet` 一旦为真，共用开场行就会在每次会面出现，包括后期。这是设计如此，不是 bug。
- **注册在 `lord_start` 之后无条件跳转**，玩家选完介绍直接进 `lord_start`，跳过其它通用开场。若 mod 想插入内容，应该挂到 `lord_start` 上而不是改这三个 id。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类，提供空 `SyncData` 的合法实现路径
- [CampaignEvents](../../campaign/CampaignEvents) — `OnSessionLaunchedEvent` 是本行为唯一的订阅来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddDialogLine` 的注册入口
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 的管理者
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) — 同样在会话启动时注册对话/菜单，导师由它创建与安置
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖