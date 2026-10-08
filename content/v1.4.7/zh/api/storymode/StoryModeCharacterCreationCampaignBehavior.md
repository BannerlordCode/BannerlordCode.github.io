---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "主线战役对角色创建流程的改写器：砍掉旗帜与家族命名阶段，把父母、文化、长相和出生地都锚定到固定的家人英雄上。"
---
# StoryModeCharacterCreationCampaignBehavior

**命名空间：** `StoryMode.GameComponents.CampaignBehaviors`
**模块：** `StoryMode`
**类型：** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**基类：** `TaleWorlds.CampaignSystem.CampaignBehaviorBase`
**源文件：** `bannerlord-1.4.7/StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`（声明见第 16 行）

## 概述

原版角色创建是一套可自由发挥的流程：选文化、编家族名、画旗帜、挑年龄阶段。主线战役不打算给玩家这份自由——故事模式里主角的身世是写好的：父母双亡、弟弟妹妹被掠夺者掳走、哥哥出发寻找。这个 Behavior 就是把这套既定剧本**注入**到角色创建流程里的地方。

它的手段很直接：一方面作为 `CampaignBehaviorBase` 订阅战役事件，在角色创建初始化时把自己注册成内容处理器、在创建结束时把家庭英雄的出生地与百科文本落定、在读取旧存档时补齐主角的父母关系；另一方面作为 `ICharacterCreationContentHandler` 介入内容初始化，删掉原版的旗帜编辑与家族命名两个阶段，把主角的父母直接指向固定的家人英雄，并追加一段「逃脱夜」的叙事菜单。它自己几乎不持有持久状态，`SyncData` 是空实现。

## 心智模型

把它想成**主线剧本的「角色创建补丁」**：原版流程是通用引擎，它是在引擎跑起来之前/之中改配置的那只手。它不重新实现 UI，也不接管流程调度——那些归 `CharacterCreationManager` 和 `CharacterCreationContent`；它只做「删掉不需要的阶段、填上固定的人、加一段自己的剧情菜单」这三类改写。

状态从哪来？三类来源：一是 `StoryModeHeroes` 里那些静态的家人英雄对象（父母、弟弟妹妹、哥哥），它们是本类所有改写的目标；二是 `CharacterCreationManager` 当前的 `CharacterCreationContent`，文化、标题类型、以及要追加的成长点数都从它读；三是 `GameStateManager.Current.ActiveState`，本类通过它反查当前的 `CharacterCreationState` 并从中取出管理器。

谁改它？游戏的战役启动流程改。它被注册为 Behavior 之后，事件总线决定它的三个回调何时触发；`ICharacterCreationContentHandler` 的四个方法则由角色创建管理器在流程节点上回调。**它没有任何玩家可调的开关**。

子类要覆写什么？它本身不是 abstract，但直接派生意义不大——它的问题在于「谁负责注册」。真正需要介入角色创建流程的 mod，正确做法是实现自己的 `ICharacterCreationContentHandler` 并用管理器注册，或者干脆只复用本类的两个公开初始化方法。它不负责：角色创建之外的任何剧情推进、任务创建、以及创建完成后主线的后续阶段（那些归 `CampaignStoryMode`）。

## 怎么用

你不应该自己 `new` 一个它来用——它依赖前置的回调来抓取成长点数与状态管理器。正确姿势有两种：

1. **不要直接实例化后调用公开方法**。`InitializeData` 内部会调用 `AddEscapeMenu`，而那里会读 `this._skillLevelToAdd` 与私有的 `_characterCreationManager`（`StoryModeCharacterCreationCampaignBehavior.cs:140`）；这两个值是在角色创建初始化事件回调里被抓取和赋值的，绕开事件直接构造实例会让它们停在默认值甚至为 null。
2. **`SyncData` 是空实现**（`StoryModeCharacterCreationCampaignBehavior.cs:69`）。本类没有要持久化的字段，所以读档不会丢任何东西——但如果你从它派生并加了字段，必须自己覆写 `SyncData`，否则那些字段在读档后归零。
3. **三个事件订阅一个都不能少**。`RegisterEvents` 同时挂上角色创建初始化、角色创建结束、以及读档完成三个回调（`StoryModeCharacterCreationCampaignBehavior.cs:34`）。其中读档完成回调负责修复老存档里主角缺失的父母与配偶关系，角色创建结束回调负责把家人的出生地和百科文本补齐；覆写时如果只写自己的订阅、丢掉 `base.RegisterEvents()`，老存档玩家的家谱就会一直是空的。
4. **两个 `RemoveStage` 会真正删掉阶段**。`InitializeCharacterCreationStages` 会移除旗帜编辑与家族命名阶段（`StoryModeCharacterCreationCampaignBehavior.cs:133`）。任何依赖这两个阶段存在的自定义逻辑（例如想在旗帜编辑器里加控件）在故事模式下都不会被触发。
5. **年龄选择菜单也被删掉**。`InitializeData` 会调用 `DeleteNarrativeMenuWithId("narrative_age_selection_menu")`（`StoryModeCharacterCreationCampaignBehavior.cs:140`），故事模式固定从哥哥的视角展开，玩家不能改起始年龄。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler` | 声明行：既是战役 Behavior，又是角色创建内容处理器，两重身份决定了它同时接收事件回调与流程回调。`StoryModeCharacterCreationCampaignBehavior.cs:16` |
| `override void RegisterEvents()` | 订阅三个战役事件：角色创建初始化（把自己注册成内容处理器）、角色创建结束（落定家人的出生地与百科文本）、读档完成（修复旧存档缺失的父母/配偶关系）。`StoryModeCharacterCreationCampaignBehavior.cs:34` |
| `override void SyncData(IDataStore dataStore)` | 空实现——本类没有持久字段。派生类一旦新增字段就必须自己接管这里。`StoryModeCharacterCreationCampaignBehavior.cs:69` |
| `void InitializeCharacterCreationStages(CharacterCreationManager)` | 移除原版的旗帜编辑阶段与家族命名阶段，故事模式的家族身份是固定的，不需要玩家自定义。`StoryModeCharacterCreationCampaignBehavior.cs:133` |
| `void InitializeData(CharacterCreationManager)` | 把主角的父母指向固定的家人英雄，改写确认页描述，删除年龄选择菜单，并追加「逃脱夜」叙事菜单（含兄弟姐妹的长相生成）。`StoryModeCharacterCreationCampaignBehavior.cs:140` |
| `void ICharacterCreationContentHandler.InitializeContent(CharacterCreationManager)` | 显式接口实现：先调 `InitializeCharacterCreationStages` 再调 `InitializeData`，是上面两个公开方法的实际串联点。`StoryModeCharacterCreationCampaignBehavior.cs:150` |
| `void ICharacterCreationContentHandler.AfterInitializeContent(CharacterCreationManager)` | 内容初始化完成后回调，转发到私有的 `ModifyParentMenu`，用于改写父母菜单。`StoryModeCharacterCreationCampaignBehavior.cs:157` |
| `void ICharacterCreationContentHandler.OnStageCompleted(CharacterCreationStageBase)` | 阶段完成回调；当完成的是捏脸阶段时触发 `FaceGenUpdated`，据此生成弟弟妹妹与哥哥的体型。`StoryModeCharacterCreationCampaignBehavior.cs:163` |
| `void ICharacterCreationContentHandler.OnCharacterCreationFinalize(CharacterCreationManager)` | 流程收尾回调：把玩家选定的文化同步给弟弟与妹妹，保证一家人文化一致。`StoryModeCharacterCreationCampaignBehavior.cs:172` |
| `private CharacterCreationManager _characterCreationManager` | 私有属性，从当前 `GameStateManager` 的活动状态里反查管理器；状态不对时返回 `null`，这是直接实例化调用会踩坑的根源。`StoryModeCharacterCreationCampaignBehavior.cs:20` |

## 真实示例

复用故事模式那套「删阶段 + 锚定家人」的初始化：先取回已经注册的 Behavior 实例（未注册时为 `null`），再在角色创建管理器回调里调用它的两个公开方法。注意这里调用的是真实存在的公开 API，而不是自己 `new` 一个。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterCreationContent;
using StoryMode.GameComponents.CampaignBehaviors;

public class MyStoryContentHandler : ICharacterCreationContentHandler
{
    void ICharacterCreationContentHandler.InitializeContent(CharacterCreationManager characterCreationManager)
    {
        // 取回游戏本体注册的实例；没注册就是 null，必须先判空
        StoryModeCharacterCreationCampaignBehavior behavior =
            Campaign.Current.GetCampaignBehavior<StoryModeCharacterCreationCampaignBehavior>();
        if (behavior == null)
        {
            return;
        }

        // 复用本体那套改写：删掉旗帜/家族命名阶段，再把父母锚定到固定家人英雄
        behavior.InitializeCharacterCreationStages(characterCreationManager);
        behavior.InitializeData(characterCreationManager);
    }

    void ICharacterCreationContentHandler.AfterInitializeContent(CharacterCreationManager characterCreationManager)
    {
    }

    void ICharacterCreationContentHandler.OnStageCompleted(CharacterCreationStageBase stage)
    {
    }

    void ICharacterCreationContentHandler.OnCharacterCreationFinalize(CharacterCreationManager characterCreationManager)
    {
    }
}
```

## 参见

- ↔ 同桶：[CampaignStoryMode](../CampaignStoryMode) —— 主线战役的装配入口，这个 Behavior 就是在那里被挂进战役的。
- ↔ 同桶：[StoryModeManager](../StoryModeManager) —— 主线的全局状态源，家人英雄与剧情阶段都由它持有。
- ↔ 跨桶：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) —— 基类契约：`RegisterEvents` 与 `SyncData` 的时序与责任。
- ↔ 跨桶：[CampaignEvents](../../campaign/CampaignEvents) —— 本类订阅的三个事件（角色创建初始化 / 结束、读档完成）都在这里定义。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
