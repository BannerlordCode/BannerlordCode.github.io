---
title: "IsArzagosTag"
description: "对话标签：把反帝国导师 Arzagos 单独认出来，是 IsIstianaTag 的镜像版本。"
---
# IsArzagosTag

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class IsArzagosTag : ConversationTag`
**Base:** `ConversationTag`（TaleWorlds.CampaignSystem.Conversation.Tags）
**Source:** `bannerlord-1.5.3/StoryMode/IsArzagosTag.cs`

## 概述

与 [IsIstianaTag](../IsIstianaTag) 完全对称的对话标签：`IsApplicableTo(character)` 判断传入角色是否就是 [StoryModeHeroes](../StoryModeHeroes).AntiImperialMentor（Arzagos）。它存在的唯一理由是**主线有一段只有 Arzagos 说的话**——反帝国阵营那边的专属台词需要这个标签才能被筛出来。

## 心智模型

`ConversationManager.InitializeTags()` 在会话启动时用反射扫所有活动程序集，把每个 `ConversationTag` 子类 `Activator.CreateInstance` 成单例，以 `StringId` 为键建表。对话文本变体上的 `ChoiceTag` 通过 `IsTagApplicable(tagName, character)` 反查这张表；判定为 false 且 `IsTagReversed` 为 false 时，该变体匹配分被压到 `int.MinValue` 直接排除。

主线需要区分三个粒度的「谁是导师」：

| 标签 | 覆盖范围 |
| --- | --- |
| `IsIstianaTag` | 只有帝国导师 |
| `IsArzagosTag` | 只有反帝国导师 |
| `IsStoryModeMentorTag` | 两位导师都用 |

写对话 XML 时按需选一个。**不要**用 `IsArzagosTag` 去表达「导师」，那是反帝国专属的。

**坑**：

1. **`StoryModeHeroes.AntiImperialMentor` 在非主线战役抛异常**。`StoryModeManager.Current` 为 null 时静态属性直接 NRE，不返回 null。沙盒战役里这段对话筛选逻辑照常运行，所以这是真实的崩溃点。
2. **加载时序**：剧情英雄在 `CampaignStoryMode` 加载走完 `InitializeFirstStep` 之后才存在。在更早的钩子里触发对话选词会崩。
3. **`StringId` 与 `Id` 两份重复字面量**：都是 `"IsArzagosTag"`，必须同步。改一处会让对话 XML 找不到标签，表现为「台词永远不出现」且无报错。
4. **对象是全战役单例**：反射只 new 一次。别往里加状态。

## 主要成员

- `public override string StringId { get; }`：恒为 `"IsArzagosTag"`。反射注册键，也是对话 XML 里 `ChoiceTag.TagName` 要写的名字。
- `public override bool IsApplicableTo(CharacterObject character)`：`StoryModeHeroes.AntiImperialMentor.CharacterObject == character`。引用相等。
- `public const string Id`：`"IsArzagosTag"`。编译期常量，供 XML 与代码引用。

## 使用示例

```csharp
// 1) 代码里判断某个角色是不是 Arzagos
CharacterObject speaker = Hero.MainHero.CharacterObject;
bool talkingToArzagos = new IsArzagosTag().IsApplicableTo(speaker);

// 2) 引擎侧查询：ConversationManager 的两个公开入口
ConversationManager cm = Campaign.Current.ConversationManager;
foreach (string tagName in cm.GetApplicableTagNames(speaker))
{
    Debug.Print("当前角色命中的标签：" + tagName);   // 面对 Arzagos 时会有 IsArzagosTag
}
bool applicable = cm.IsTagApplicable("IsArzagosTag", speaker);

// 3) 只想要「是不是任一导师」：用 IsStoryModeMentorTag，别自己或两个
bool isAnyMentor = new IsStoryModeMentorTag().IsApplicableTo(speaker);

// 4) 安全调用：先确认是主线战役，避免 StoryModeHeroes 抛异常
if (StoryModeManager.Current != null)
{
    Hero mentor = StoryModeManager.Current.MainStoryLine.IsOnAntiImperialQuestLine
        ? StoryModeHeroes.AntiImperialMentor
        : StoryModeHeroes.ImperialMentor;
    Debug.Print("当前导师：" + mentor.Name);
}
```

## 风险与边界

- **非主线战役会崩**：`StoryModeHeroes.AntiImperialMentor` 在 `StoryModeManager.Current == null` 时抛异常。任何直接调 `IsApplicableTo` 的代码都要先判战役类型。
- **两份重复字面量**：`StringId` 与 `const Id` 必须同步，否则标签静默失联。
- **单例且全局**：只在 `InitializeTags()` 构造一次，整个战役共用。
- **引用相等**：`CharacterObject` 被 mod 复制过就会匹配失败。值相等（比 `StringId`）在主线里反而不可用，因为剧情英雄是运行时创建的。
- **没有权重**：标签只给 true/false，权重写在对话 XML 的 `ChoiceTag` 上。

## 依赖关系

- [StoryModeHeroes](../StoryModeHeroes) — 唯一的判定依据，`AntiImperialMentor` 属性
- [IsIstianaTag](../IsIstianaTag) — 镜像标签，对应帝国导师
- [IsStoryModeMentorTag](../IsStoryModeMentorTag) — 同时覆盖两位导师的合并版本
- [MainStoryLine](../MainStoryLine) — 决定玩家面对哪一位导师的上下文