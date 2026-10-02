---
title: "IsStoryModeMentorTag"
description: "对话标签：一次覆盖 Istiana 和 Arzagos 两位主线导师，是主线剧本里用得最广的那个筛选条件。"
---
# IsStoryModeMentorTag

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class IsStoryModeMentorTag : ConversationTag`
**Base:** `ConversationTag`（TaleWorlds.CampaignSystem.Conversation.Tags）
**Source:** `bannerlord-1.5.3/StoryMode/IsStoryModeMentorTag.cs`

## 概述

三个主线对话标签里最常用的一个：`IsApplicableTo(character)` 在角色等于 Istiana **或** Arzagos 时返回 true。它的存在是为了让一批「导师通用」的台词——不论玩家选了哪一边都能听到的那部分——不必为两位导师各写一份 XML 变体。

## 心智模型

和另外两个标签一样，它是一个**纯判定**的 `ConversationTag` 子类，靠 `ConversationManager.InitializeTags()` 的反射扫描注册成单例，键是 `StringId`。差别只在这个类用 `||` 串了两边：

```csharp
return StoryModeHeroes.AntiImperialMentor.CharacterObject == character
    || StoryModeHeroes.ImperialMentor.CharacterObject == character;
```

选哪个标签的判据是**台词的性质**，不是玩家阵营：

- 阵营专属（只有一边能听到）→ [IsIstianaTag](../IsIstianaTag) 或 [IsArzagosTag](../IsArzagosTag)。
- 两边通用 → 本标签。
- 只关心「是不是导师 NPC」而不想区分 → 也是本标签。

**注意求值顺序**：源码里 `AntiImperialMentor` 在前。这意味着**两个静态属性都会被求值**，只是 `||` 在第一个为 true 时短路。也就是说当角色是 Istiana 时，Arzagos 那次访问不会发生；但当角色是其它任意人时，**两次访问都执行**——两次都带 `StoryModeManager.Current` 的 NRE 风险。

**坑**：

1. **非主线战役必崩**：`StoryModeManager.Current == null` 时 `StoryModeHeroes.AntiImperialMentor` 直接抛异常。因为 `||` 短路只在 Istiana 命中时生效，**面对非导师角色时会连续触发两次访问**，风险面比单导师标签更大。
2. **加载未完成时同样崩**：剧情英雄要等 `CampaignStoryMode.DoLoadingForGameType` 走到 `InitializeFirstStep` 之后才存在。
3. **`StringId` 与 `Id` 两份重复**：`"IsStoryModeMentorTag"` 出现两次，改一处会让对话 XML 静默失联。
4. **重名风险**：`StringId` 是全局键。如果 mod 也注册了一个同名标签，`ConversationManager.InitializeTags` 里的 `_tags.Add(...)` 会因键重复抛异常，整个对话系统初始化失败。**自定义标签必须保证 `StringId` 全局唯一。**

## 主要成员

- `public override string StringId { get; }`：恒为 `"IsStoryModeMentorTag"`。全局注册键。
- `public override bool IsApplicableTo(CharacterObject character)`：两位导师的 `CharacterObject` 引用任一匹配即 true。
- `public const string Id`：`"IsStoryModeMentorTag"`。供对话 XML 与代码引用。

## 使用示例

```csharp
// 1) 代码里判断「这个角色是不是主线导师」
CharacterObject speaker = Hero.MainHero.CharacterObject;
bool isMentor = new IsStoryModeMentorTag().IsApplicableTo(speaker);

// 2) 引擎侧查询（ConversationManager 的两个公开入口）
ConversationManager cm = Campaign.Current.ConversationManager;
foreach (string tagName in cm.GetApplicableTagNames(speaker))
{
    if (tagName == "IsStoryModeMentorTag")
    {
        Debug.Print("正在和导师对话");
    }
}
bool applicable = cm.IsTagApplicable("IsStoryModeMentorTag", speaker);

// 3) 安全写法：先确认是主线战役，再问标签
StoryModeManager manager = StoryModeManager.Current;
if (manager != null && manager.StoryModeHeroes != null)
{
    bool safe = new IsStoryModeMentorTag().IsApplicableTo(speaker);
    // 此时 manager.StoryModeHeroes 已存在，StoryModeHeroes.AntiImperialMentor 不会 NRE
}

// 4) 自定义标签时避开全局重名：StringId 必须全局唯一
//    否则 ConversationManager.InitializeTags() 里的 _tags.Add 会抛异常
```

## 风险与边界

- **沙盒战役里的真实崩溃点**：`||` 让两位导师的属性都被访问，任何一次 `StoryModeManager.Current == null` 都会抛异常且无法被 catch 到有意义的位置。对话文本选择在沙盒战役照常运行。
- **全局键冲突**：`StringId` 冲突会让整个 `ConversationManager.InitializeTags()` 失败。mod 加自定义标签时务必取一个 StoryMode 与 TaleWorlds 都没用过的名字。
- **两份重复字面量**：`StringId` 属性与 `const Id` 需要手工保持一致。
- **单例无状态**：反射只 new 一次，整个战役共用一个实例。加状态会跨对话泄漏。
- **引用相等**：`CharacterObject` 被复制就会失配。
- **与两个具体标签正交**：同时用三个标签不会冲突——`FindMatchingScore` 是逐标签累加权重，不做互斥判断。真正的区别在于**同一句台词的 XML 变体里写了哪个 TagName**。

## 依赖关系

- [StoryModeHeroes](../StoryModeHeroes) — 判定依据，`AntiImperialMentor` 与 `ImperialMentor` 两个属性
- [IsIstianaTag](../IsIstianaTag) — 只覆盖帝国导师的具体标签
- [IsArzagosTag](../IsArzagosTag) — 只覆盖反帝国导师的具体标签
- [MainStoryLine](../MainStoryLine) — 决定玩家面对哪一位导师的上下文
- [StoryModeManager](../StoryModeManager) — `Current` 为 null 是本标签最大的崩溃来源