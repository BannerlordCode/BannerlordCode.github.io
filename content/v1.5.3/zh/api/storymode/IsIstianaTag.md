---
title: "IsIstianaTag"
description: "对话标签：把帝国导师 Istiana 单独认出来，让主线专属台词只在面对她时匹配。"
---
# IsIstianaTag

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class IsIstianaTag : ConversationTag`
**Base:** `ConversationTag`（TaleWorlds.CampaignSystem.Conversation.Tags）
**Source:** `bannerlord-1.5.3/StoryMode/IsIstianaTag.cs`

## 概述

一个只做身份判断的对话标签：`IsApplicableTo(character)` 当且仅当传入的角色对象等于 [StoryModeHeroes.ImperialMentor](../StoryModeHeroes).CharacterObject 时返回 true。没有状态、没有事件、没有副作用。

## 心智模型

`ConversationTag` 是对话系统的筛选条件。`ConversationManager.InitializeTags()` 在**会话启动时用反射遍历所有活动程序集**，把每个 `ConversationTag` 子类 `Activator.CreateInstance` 出来，以 `StringId` 为键存进一张表。之后对话里的文本变体（`GameText.GameTextVariation`）带一串 `ChoiceTag`，`FindMatchingScore` 逐个调 `IsTagApplicable(tagName, character)`：

- 判定结果与 `IsTagReversed` 一致 → 整条变体的匹配分直接变成 `int.MinValue`，等价于排除。
- 一致则把 `Weight` 累加进总分，取分最高的那条变体。

所以一个标签的**唯一作用**是给某类角色加/减匹配分，让玩家只在该跟特定 NPC 说话时看到对应台词。

本标签的三条硬约束：

1. `StringId` 与 `const string Id` 都是 `"IsIstianaTag"`——**两处必须一致**，因为反射注册用的是 `StringId` 属性，而对话 XML 里写的是 `Id`。改一处不改另一处，标签就永远匹配不到。
2. 构造函数必须无参——反射用 `Activator.CreateInstance(type)`。
3. 对象是**单例、全战役共享**的：注册一次就一直在表里，`IsApplicableTo` 每次对话才被调。

**坑**：

1. **`StoryModeHeroes.ImperialMentor` 会 NRE**。它在 `StoryModeManager.Current == null`（沙盒、主菜单）时抛异常，不返回 null。本标签被问到的时机是「任意角色对话时」，所以在沙盒战役里**每一次对话文本选择都可能崩**。
2. **加载未完成时同样 NRE**：剧情英雄在 `InitializeFirstStep` 之后才创建。
3. **`IsApplicableTo` 没有 null 检查**：`character` 为 null 时会先解引用 `ImperialMentor`（正常），再与 null 比较返回 false，不崩。但若 `ImperialMentor` 本身为 null（mod 删掉了对应 `CharacterObject`），`.CharacterObject` 就是 NRE。
4. **无法被覆盖**：判定逻辑写死在类里。想改「谁算 Istiana」只能改源码或整个替换掉标签注册。

## 怎么用

### 怎么拿到它

`public class IsIstianaTag : ConversationTag` 声明在 `bannerlord-1.5.3/StoryMode/IsIstianaTag.cs:9`，全文 31 行，同样没有构造函数或静态属性。代码里判定就 `new IsIstianaTag()`；运行时引擎持有的那一份由 `ConversationManager.InitializeTags()`（`TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs:1139`）在遍历活动程序集时 `Activator.CreateInstance`（`:1168`）造出，再以 `StringId`（`IsIstianaTag.cs:13`，恒为 `"IsIstianaTag"`）为键 `Add` 进 `_tags`（`:1169`）。**你自己的 new 出来的实例和引擎表里那一份不是同一个对象**，只能用来做纯判定，不能拿去和引擎对象比引用。

判定链只有一跳：`IsApplicableTo(CharacterObject character)`（`IsIstianaTag.cs:22`）返回 `StoryModeHeroes.ImperialMentor.CharacterObject == character`。`ImperialMentor` 在 `StoryModeObjects/StoryModeHeroes.cs:65`，函数体只有一行 `StoryModeManager.Current.StoryModeHeroes._imperialMentor`（`:69`）；而 `_imperialMentor` 是 `StoryModeHeroes` 的 `internal` 构造函数（`:114`）调 `RegisterAll()` 时用 `HeroCreator.CreateBasicHero("storymode_imperial_mentor_istiana", ...)` 建的（`:168`）。整条链的起点是 `CampaignStoryMode.DoLoadingForGameType` 在 `GameTypeLoadingStates.InitializeFirstStep` 上调用的 `StoryMode.InitializeStoryModeObjects()`（`CampaignStoryMode.cs:42`）。

`StoryModeManager.Current` 本身是纯转发：`Game.Current.GameType as CampaignStoryMode` 再取 `.StoryMode`（`StoryModeManager.cs:32`→`:39`→`:42`），不是主线就返回 null。

### 典型用法

```csharp
// 纯判定，不需要任何前置注册
IsIstianaTag tag = new IsIstianaTag();
CharacterObject speaker = CharacterObject.OneToOneConversationCharacter;

// 主线之外 StoryModeManager.Current 为 null，下面这行会直接 NRE
if (StoryModeManager.Current != null)
{
    Hero istiana = StoryModeHeroes.ImperialMentor;
    Debug.Print("Istiana = " + istiana.Name + ", 标签命中：" + tag.IsApplicableTo(speaker));
}

// 引擎侧：GetApplicableTagNames 遍历的就是 InitializeTags 建的那张表
ConversationManager cm = Campaign.Current.ConversationManager;
foreach (string tagName in cm.GetApplicableTagNames(speaker))
{
    Debug.Print("当前角色命中的标签：" + tagName);   // 面对 Istiana 时含 IsIstianaTag
}

// 名字写错的后果：IsTagApplicable 会先 FailedAssert 再返回 false
Debug.Print(cm.IsTagApplicable(IsIstianaTag.Id, speaker).ToString());
```

### 最容易踩的坑

把 `IsIstianaTag` 当成「玩家是否已效忠帝国」来用。它判的只有一件事：`character` 的引用是否**恰好等于** `StoryModeHeroes.ImperialMentor.CharacterObject`（`IsIstianaTag.cs:22`）。你把标签写在普通市民 NPC 的对话变体上，它永远不成立；反过来在不该出现的对话里挂上，权重会静默加进 `FindMatchingScore` 的累加（`ConversationManager.cs:1129`），改变台词选择结果但不报错。要表达「帝国侧」语义，用 `MainStoryLineSide.IsOnImperialQuestLine`，别借用对话标签。

## 主要成员

- `public override string StringId { get; }`：恒为 `"IsIstianaTag"`。**反射注册用的就是这个值**，也是对话 XML 里 `<ChoiceTag TagName="IsIstianaTag">` 要写的名字。
- `public override bool IsApplicableTo(CharacterObject character)`：核心判定，`StoryModeHeroes.ImperialMentor.CharacterObject == character`。引用相等，不是 StringId 比较。
- `public const string Id`：`"IsIstianaTag"`。编译期常量，给 XML 与代码里拼名字用。**与 `StringId` 是重复声明**，必须手工保持一致。

## 使用示例

```csharp
// 1) 对话 XML 里用它筛台词（ChoiceTag 的 TagName 就是 StringId）
//    <Variation ...>
//      <ChoiceTag TagName="IsIstianaTag" Weight="100" />
//    </Variation>

// 2) 代码里手动判断某个角色是不是 Istiana
CharacterObject speaker = Hero.MainHero.CharacterObject;
bool talkingToIstiana = new IsIstianaTag().IsApplicableTo(speaker);
// 注意：自己 new 一个是安全的（无状态），但那不是引擎用的那个实例

// 3) 引擎侧查询：ConversationManager 提供两个公开入口
ConversationManager cm = Campaign.Current.ConversationManager;
foreach (string tagName in cm.GetApplicableTagNames(speaker))
{
    Debug.Print("当前角色命中的标签：" + tagName);
}
bool applicable = cm.IsTagApplicable("IsIstianaTag", speaker);

// 4) 两个导师要一起判断时用 IsStoryModeMentorTag，别自己 || 两个标签
bool isAnyMentor = new IsStoryModeMentorTag().IsApplicableTo(speaker);
```

## 风险与边界

- **非主线战役有崩溃风险**：`StoryModeHeroes.ImperialMentor` 在 `StoryModeManager.Current == null` 时抛异常。而对话文本选择在沙盒战役里照常发生——这是本标签最实际的风险。
- **两个名字必须同步**：`StringId` 属性与 `const string Id` 是两份重复的 `"IsIstianaTag"`。只改一处会让标签注册名和 XML 引用名脱节，表现为「台词永远不出现」，而且没有任何报错。
- **单例且全局**：`Activator.CreateInstance` 只在 `InitializeTags()` 跑一次，整个战役共用一个实例。不要往里加状态。
- **引用相等而非值相等**：`==` 比较的是 `CharacterObject` 对象引用。同一个 NPC 在不同 `CharacterObject` 实例下不会匹配（正常情况下引擎保证唯一，但 mod 复制了 CharacterObject 就会失效）。
- **无权重概念**：标签本身只给 true/false。权重写在对话 XML 的 `ChoiceTag` 上，不在类里。

## 依赖关系

- [StoryModeHeroes](../StoryModeHeroes) — 唯一的判定依据，`ImperialMentor` 属性
- [IsStoryModeMentorTag](../IsStoryModeMentorTag) — 同一套判定的「两位导师」版本，写对话 XML 时常一起用
- [MainStoryLine](../MainStoryLine) — 决定玩家面对哪一位导师的上下文
- [IsArzagosTag](../IsArzagosTag) — 镜像标签，对应反帝国导师