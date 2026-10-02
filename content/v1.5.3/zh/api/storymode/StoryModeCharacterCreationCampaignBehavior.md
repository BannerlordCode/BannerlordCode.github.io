---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "角色创建行为：移除旗帜与氏族命名两个阶段，注入「父母」与「逃亡」两段叙事菜单，最后把全家外貌与姓名一次性定稿。"
---
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`（同时实现 `ICharacterCreationContentHandler`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`

## 概述

StoryMode 的角色创建和原版完全不同：没有旗帜编辑器、没有氏族命名阶段，多出一段「逃亡」的叙事菜单供玩家选择脱身方式（制服匪兵、用箭驱离、抢马逃走、虚张声势、带动旅客突围、修筑简易工事），六种选择各自附带技能/属性奖励。这个行为实现了 `ICharacterCreationContentHandler` 接口——游戏会在内容初始化、内容初始化后、阶段完成、最终定稿四个时机回调它，它在每个时机插入自己的逻辑，最后把父母、弟妹、兄长、玩家的外貌、姓名、文化、装备全部对齐。

## 心智模型

**注册无条件**：`StoryModeSubModule.AddBehaviors` 里 `AddBehavior(new StoryModeCharacterCreationCampaignBehavior())`。

**三个战役事件订阅**：`OnCharacterCreationInitializedEvent`、`OnCharacterCreationIsOverEvent`、`OnGameLoadFinishedEvent`。

**`ICharacterCreationContentHandler` 的四个回调**（注意其中三个是**显式接口实现**，外部只能通过接口调用）：

| 接口方法 | 转发到 |
|---|---|
| `InitializeContent(CharacterCreationManager)` | `InitializeCharacterCreationStages` + `InitializeData` |
| `AfterInitializeContent(CharacterCreationManager)` | `ModifyParentMenu` |
| `OnStageCompleted(CharacterCreationStageBase stage)` | `FaceGenUpdated()`（仅当 stage 是 `CharacterCreationFaceGeneratorStage`） |
| `OnCharacterCreationFinalize(CharacterCreationManager)` | `ApplyCulture(SelectedCulture)` |

**注册时机**（`OnCharacterCreationInitialized`）：先把 `CharacterCreationContent.FocusToAdd` / `SkillLevelToAdd` / `AttributeLevelToAdd` 三个值缓存到私有字段，再 `characterCreationManager.RegisterCharacterCreationContentHandler(this, 900)`。**优先级 900** 决定了这个 handler 在所有已注册 handler 中的执行顺序。

**`InitializeCharacterCreationStages` 做的两件事都是「移除」**：`RemoveStage<CharacterCreationBannerEditorStage>()` 与 `RemoveStage<CharacterCreationClanNamingStage>()`。旗帜与命名被挪到了教程之后的路上（见 [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) 的 `OpenBannerSelectionScreen`）。

**`InitializeData` 的四件事**：给 `Hero.MainHero` 挂上父母；改写复核页描述文本；`DeleteNarrativeMenuWithId("narrative_age_selection_menu")` 删掉原版的年龄选择；`AddEscapeMenu` 插入「narrative_escape_menu」。

**`ModifyParentMenu` 的技巧**：遍历 `narrative_parent_menu` 的所有选项，逐个 `SetOnConsequence(this.FinalizeParentsAndLittleSiblings)`——**不是替换某一个选项，而是把菜单里所有选项的后果都指向同一个定稿方法**。玩家在父母菜单选哪个背景，最终都会走到同一段代码。

**三段定稿**：

- `FinalizeParentsAndLittleSiblings(CharacterCreationManager)` —— 从 `main_hero_mother` / `main_hero_father` 的 `CharacterObject` 出发，把叙事菜单里选出的体型、装备、文化写回；用 `GameTexts.FindText("str_player_little_brother_name", Hero.MainHero.Culture.StringId)` 等按文化取姓名；互设 `Spouse`；调 `UpdateHomeSettlement()` 与 `SetHasMet()`。
- `FinalizeMainHeroAndElderBrother(CharacterCreationManager)` —— 从 `narrative_escape_menu` 里取 `player_escape_character` 与 `brother_character` 的 `Equipment`，`FillFrom` 到玩家的 `Equipment` 与 `FirstCivilianEquipment`、以及兄长的对应槽位。
- `protected void CreateSibling(Hero hero, BodyProperties motherBodyProperties, BodyProperties fatherBodyProperties, uint seed)` —— 唯一受保护的方法，按父母体型 + `seed` 生成弟妹的体型。**它是 protected 而不是 private，就是给派生类用的扩展点。**

**存档**：`SyncData` 空实现。唯一存档相关的是 `OnGameLoadFinished`：当 `LastLoadedGameVersion` 早于 `v1.3.1.52060` 且主角 `StringId == "main_hero"` 时，补上缺失的父母引用并互设配偶。

**常见误用与坑**

- **显式接口实现**：`InitializeContent` / `AfterInitializeContent` / `OnStageCompleted` / `OnCharacterCreationFinalize` 前面是 `void ICharacterCreationContentHandler.X(...)` 形式，**不能用实例直接调**，必须 cast 到接口。
- **`ModifyParentMenu` 依赖 `"narrative_parent_menu"` 这个 id 存在**。id 改名则 NRE（`GetNarrativeMenuWithId` 返回 null 后立即 `.CharacterCreationMenuOptions`）。
- **`FinalizeParentsAndLittleSiblings` 里 `narrativeMenuCharacter` 可能为 null**：若 `narrative_parent_menu` 的 `Characters` 里没有 `mother_character` / `father_character`，后面 `.BodyProperties` NRE。删掉那个菜单就会触发。
- **优先级 900 是硬编码**。若另一个 mod 也注册了 handler 且用同一个优先级，先后顺序由注册时序决定，不可控。
- **`_focusToAdd` / `_skillLevelToAdd` / `_attributeLevelToAdd` 三个字段被读取但只用于 `MBTextManager.SetTextVariable("EXP_VALUE", _skillLevelToAdd)`**，其余两个在源码里没被实际消费。
- **`ApplyCulture` 只改弟妹的文化**，父母与兄长的文化在 `FinalizeParentsAndLittleSiblings` / `FinalizeMainHeroAndElderBrother` 里各自处理，三处分散。

## 主要成员

- `public override void RegisterEvents()`
  订阅三个战役事件。
- `public override void SyncData(IDataStore dataStore)`
  空实现。
- `public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`
  **公开**。移除旗帜编辑与氏族命名两个阶段。
- `public void InitializeData(CharacterCreationManager characterCreationManager)`
  **公开**。挂父母、改复核描述、删年龄菜单、插入逃亡菜单。
- `protected void CreateSibling(Hero hero, BodyProperties motherBodyProperties, BodyProperties fatherBodyProperties, uint seed)`
  **protected**，派生类的扩展点。`seed` 不同则生成的体型不同——源码给小弟 `hashCode + 1U`、妹妹 `hashCode + 2U`。
- 私有 `AddEscapeMenu(CharacterCreationManager)` / `AddEscapeNarrativeMenuOptions(NarrativeMenu)` / `GetEscapeMenuNarrativeMenuCharacterArgs(...)`
  逃亡菜单的构造。六个选项 id 分别是 `escape_subdued_raider_option` / `escape_arrow_option` / `escape_horse_option` / `escape_tricked_option` / `escape_breakout_option` / `escape_makeshift_fortification_option`，**每个都把自己的 `OnSelect` 与统一的 `OnConsequence = FinalizeMainHeroAndElderBrother` 配对**。
- 私有 `GetXxxNarrativeOptionArgs(NarrativeMenuOptionArgs args)` × 6 与 `XxxNarrativeOptionOnCondition` / `XxxNarrativeOptionOnSelect` × 6
  十二个方法，每个选项一套，负责按条件调整选项文本并施加对应的属性/技能奖励。
- 私有 `ModifyParentMenu(CharacterCreationManager)` / `FinalizeParentsAndLittleSiblings(CharacterCreationManager)` / `FinalizeMainHeroAndElderBrother(CharacterCreationManager)`
  三段定稿。
- 私有 `OnGameLoadFinished()`
  旧存档（< `v1.3.1.52060`）的父母引用补齐。
- 私有 `OnCharacterCreationIsOver(int index)`
  `index == 1` 时调 `UpdateHomeSettlementsOfFamily()` 与 `FinalizeFamilyStory()`（后者写五段百科文本给父母、弟妹、兄长）。
- 私有 `UpdateHomeSettlementsOfFamily()` / `FinalizeFamilyStory()` / `ApplyCulture(CultureObject culture)` / `FaceGenUpdated()`
  收尾工具。`FaceGenUpdated` 在角色外观生成阶段完成后被调。

## 使用示例

```csharp
// 场景：mod 想改「逃亡」菜单里某个选项的奖励，
// 做法是另写一个 ICharacterCreationContentHandler 并注册，
// 而不是再 new 一个 StoryModeCharacterCreationCampaignBehavior（会重复定稿）
public class MyEscapeOptionHandler : CampaignBehaviorBase, ICharacterCreationContentHandler
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnCharacterCreationInitializedEvent
            .AddNonSerializedListener(this, OnInitialized);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnInitialized(CharacterCreationManager manager)
    {
        // 优先级 901 = 排在 StoryMode 的 900 之后
        manager.RegisterCharacterCreationContentHandler(this, 901);
    }

    // 注意：这三个是显式接口实现风格里可以直接声明为 public 的普通方法，
    // 接口把它们映射过去；名字必须与接口完全一致
    public void AfterInitializeContent(CharacterCreationManager manager)
    {
        NarrativeMenu escape = manager.GetNarrativeMenuWithId("narrative_escape_menu");
        if (escape == null)
        {
            return;
        }
        foreach (NarrativeMenuOption option in escape.CharacterCreationMenuOptions)
        {
            if (option.StringId == "escape_horse_option")
            {
                Debug.Print("override hook on " + option.StringId);
            }
        }
    }

    public void InitializeContent(CharacterCreationManager manager) { }
    public void OnStageCompleted(CharacterCreationStageBase stage) { }
    public void OnCharacterCreationFinalize(CharacterCreationManager manager) { }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new MyEscapeOptionHandler());
}
```

## 风险与边界

- **无自身存档风险**：`SyncData` 空实现。**但它会改写大量存档数据**——`Hero.MainHero.Father` / `Mother`、全家 `StaticBodyProperties` / `Weight` / `Build` / `Culture` / `Equipment`、父母互设的 `Spouse`。任何在角色创建之后修改这些值的 mod 会与本行为的结果冲突，且**没有重跑机制**（角色创建只在开局跑一次）。
- **`OnGameLoadFinished` 的迁移只在特定版本以下触发**，且要求 `Hero.MainHero.StringId == "main_hero"`。mod 改了主角 id，迁移不执行。
- **重复注册风险极高**：`RegisterCharacterCreationContentHandler(this, 900)` 每调一次注册一次。若你在 `AddBehaviors` 里再加一个本类的实例，`FinalizeParentsAndLittleSiblings` 会被跑两遍，第二次从菜单里再读一次已被改写的状态。
- **对 `CharacterCreationManager` 的改动全是反射之外的强类型 API**，但依赖的菜单 id（`narrative_parent_menu` / `narrative_age_selection_menu`）与阶段类型（`CharacterCreationBannerEditorStage` 等）都是具体类型，改版即断。
- **优先级 900 硬编码**。多 mod 同优先级时顺序不可控，定稿结果可能与预期不同。
- **`CreateSibling` 的 seed 来自 `Hero.MainHero.BodyProperties.GetHashCode()`**，同一个存档读档后 hash 稳定，体型不会跳变。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类，空 `SyncData` 的合法实现
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管实例
- [CampaignEvents](../../campaign/CampaignEvents) — 三个订阅事件的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教程阶段的行为，与本行为同在开局路径上先后执行
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) — 承接被本行为移除的旗帜编辑与氏族命名两段流程
- [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) — 同样监听 `OnCharacterCreationIsOverEvent`，两个行为在同一 index 上各做各的事
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖