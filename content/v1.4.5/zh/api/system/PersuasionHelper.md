---
title: "PersuasionHelper：说服结果的本地化文本"
description: "PersuasionHelper 在 v1.4.5 中为战役对话返回成功文本和默认反应 TextObject，但不拥有对话 UI 或结果变更。"
---
# PersuasionHelper

**命名空间：** `Helpers`
<br>**模块：** `TaleWorlds.CampaignSystem`
<br>**类型：** `public static class PersuasionHelper`
<br>**基类：** `System.Object`
<br>**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## 一句话职责

`PersuasionHelper` 是一个很小的本地化边界，为说服选项成功文本和默认反应提供 `TextObject`；对话行为仍负责展示和后果，Helper 自身不持有对话或 Issue 状态。

## 心智模型

方法名比 v1.4.5 的实现更像“主动执行”。`GetDefaultPersuasionOptionReaction` 把 `PersuasionOptionResult` 映射成一段本地化反应，默认分支还会随机选择文本。`ShowSuccess` 接受 `PersuasionOptionArgs` 和 `showToPlayer`，但当前方法体直接返回 `TextObject.GetEmpty()`，不会显示任何 UI。调用方负责构造对话行、设置文本变量，并决定成功或失败之后做什么。

## 何时使用，何时不要使用

- 对话或 Issue 行为需要显示最后一次说服结果的本地化反应时使用 `GetDefaultPersuasionOptionReaction`。
- 只有在 v1.4.5 调用方确实需要一个成功率文本变量的 `TextObject` 时才使用 `ShowSuccess`；当前返回值为空，不能当成可见的概率字符串。
- 不要用这个 Helper 启动对话、选择说服选项、封锁选项、改变关系或完成 Issue；这些转换属于对话或战役行为。
- 不要保存返回的 `TextObject`；它是属于当前 UI 上下文的展示数据，语言和变量都可能变化。

## 依赖关系与调用链

```text
ConversationManager / Issue 行为
          |
          v
PersuasionOptionResult 或 PersuasionOptionArgs
          |
          v
PersuasionHelper -> TextObject -> MBTextManager 变量 -> 对话行
```

- [`Hero`](../../campaign/Hero) 与对话行为提供实时交谈对象和战役上下文，Helper 不查找也不拥有它们。
- [`CampaignBehaviorBase`](../../campaign/CampaignBehaviorBase) 与 [`CampaignEvents`](../../campaign/CampaignEvents) 是消费这些文本的 Issue/对话行为的生命周期拥有者。
- [`TextObject`](../../localization/TextObject) 是输出值，不是已保存的说服结果，也不是 Action 的替代品。

## 公开成员按契约分组

| 成员 | 源码确认的行为 |
|---|---|
| `ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)` | 当前源码返回 `TextObject.GetEmpty()`。参数和标志不会在这里触发 UI 展示，也不会计算成功值。 |
| `GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)` | 为 critical success、failure/miss 和 critical failure 返回本地化文本；其他枚举值用 `MBRandom.RandomFloat` 在两段中性或肯定反应之间随机选择。 |

## 真实示例：通过调用方的文本管线设置反应

下面符合 Issue 行为的调用形状：对话代码获取结果，向 Helper 请求文本，并把职责留在调用方；Helper 不封锁选项，也不改变 Issue：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Persuasion;
using TaleWorlds.Localization;

public static TextObject BuildPersuasionReaction(PersuasionOptionResult result)
{
    Hero conversationHero = Hero.OneToOneConversationHero;
    if (conversationHero == null)
    {
        return TextObject.GetEmpty();
    }

    return PersuasionHelper.GetDefaultPersuasionOptionReaction(result);
}
```

真实的 `SmugglersIssueBehavior` 和 `MerchantArmyOfPoachersIssueBehavior` 路径会把返回值传给 `MBTextManager.SetTextVariable("PERSUASION_REACTION", reaction)`。然后行为自己决定 critical failure 是否封锁选项，这不是 `PersuasionHelper` 的职责。

## 结果与本地化边界

默认映射把 `CriticalSuccess` 映射为让步反应，把 `Failure` 或 `Miss` 映射为拒绝，把 `CriticalFailure` 映射为更强的拒绝。其他枚举值会随机取两段本地化的中性反应之一。因为随机分支只是展示文本，所以不能把它当成确定的游戏信号。

`ShowSuccess` 是版本审计中的重点：方法名像是会显示成功率，但 v1.4.5 方法体返回空 `TextObject`。Issue 行为仍可把这个对象放进文本变量，但该行不会从 Helper 获得成功率文本。

## 风险与存档边界

- `GetDefaultPersuasionOptionReaction` 的默认分支使用 `MBRandom.RandomFloat`，重复读取可能得到不同文本。
- `Hero.OneToOneConversationHero` 和 ConversationManager 状态由调用方拥有；不在活动对话中时可能为 null。
- `TextObject` 受语言和本地化上下文影响，不要把它转换成持久化字段，也不要假设渲染后的字符串跨语言稳定。
- Helper 不应用关系变化、任务进度、说服冷却或选项封锁；这些效果属于外围 Issue 或对话行为。

## 版本注记

本页依据 v1.4.5 `PersuasionHelper.cs`，其中 `ShowSuccess` 返回空 `TextObject`，默认反应使用源码中的本地化 ID 和随机回退。依赖方法名推断行为前，应先核对目标版本。

## 导航

- [↑ API 系统索引](../)
- [↔ MenuHelper](../MenuHelper)
- [↔ PerkHelper](../PerkHelper)
- [相关：Hero](../../campaign/Hero)
- [相关：CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)
- [相关：CampaignEvents](../../campaign/CampaignEvents)
- [相关：TextObject](../../localization/TextObject)
- [English page](../../../../en/api/system/PersuasionHelper)
