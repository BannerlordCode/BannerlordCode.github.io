---
title: "SandBox 扩展实战 — 自定义 GameMenu 与对话（Dialog）链路（v1.3.15）"
description: "端到端可运行范例：用 XML 或 CampaignGameStarter 在地图菜单加自定义选项并用 SetNextMenu 导航；用 OnSessionLaunched → AddPlayerLine/AddDialogLine 挂自定义对话。所有 API 对照 1.3.15 源码，含会坏档/卡菜单/选项刷屏的写法。"
---

# SandBox 扩展实战 — 自定义 GameMenu 与对话（Dialog）链路

> 本页是 [SandBox 阅读政策](../../architecture/sandbox-native-policy/) 与 [第一篇实战（能存盘的 Behavior）](../sandbox-extension-example/) 的姊妹篇。那一篇讲「行为 + 存盘」，本篇讲最常被问的两件事：**给地图菜单加一个按钮**，以及**给 NPC 对话加一句话**。下面每个 API 都来自真实源码（v1.3.15），不是示意伪代码。

## 一句话职责

如果你的 mod 想「玩家在城镇菜单里点一个自定义选项 → 跳到你的菜单 / 触发一段自定义对话」，你要做的是：用 **XML 声明菜单与选项的文本和条件**，把 `condition`/`consequence` 方法写在已注册的 `CampaignBehaviorBase` 里；或者直接在 `OnSessionLaunched` 里用 `CampaignGameStarter` 程序化挂菜单与**对话行**。

## 心智模型

```
战役启动
   │  CampaignEvents.OnSessionLaunchedEvent  (每局新游戏 / 读档都触发)
   ▼
你的 Behavior.OnSessionLaunched(CampaignGameStarter starter)
   ├─ starter.AddGameMenu(id, text, init)            ← 程序化加整菜单（可选）
   ├─ starter.AddGameMenuOption(menuId, optId, ...)  ← 程序化加选项（可选）
   └─ starter.AddPlayerLine / AddDialogLine(...)     ← 挂自定义对话行（必看本页下半）

地图菜单运行时：
   GameMenuManager（由 Campaign.Current.GameMenuManager 持有）
   ├─ SetNextMenu("id")   从某 consequence 里跳到下一个菜单
   ├─ ExitToLast()        退回上一级
   └─ RefreshMenuOptions(ctx) / RunConsequencesOfMenuOption(ctx, i)
```

- **谁创建/持有**：菜单/选项的定义来自 `ModuleData/game_menus.xml`（引擎初始化时加载），运行态由 `GameMenuManager`（`Campaign.Current.GameMenuManager`）持有。对话行的注册发生在 `OnSessionLaunched`，由 `ConversationManager` 持有。
- **所在层**：Campaign 层（地图/对话），不是 Mission 层，也不是 UI 层。
- **何时用**：给城镇/村寨菜单加自定义入口、做支线触发、给领主对话加新选项、做任务对白。
- **何时不要用**：纯 UI 弹窗改 `GauntletLayer`/`ViewModel`（那是 [UI 模式](../gauntlet-ui/)）；战斗内逻辑改 `MissionBehavior`（那是 [Mission 系统](../mission-system/)）。

## 最小可运行范例 A — 自定义地图菜单（XML 为主）

### 1）在模块里声明菜单与选项的文本/条件（XML）

放进你的模块 `ModuleData/game_menus.xml`：

```xml
<game_menus>
  <game_menu id="my_mod_menu">
    <menus>
      <menu>
        <option id="my_mod_option">
          <on_condition>my_mod_option_condition</on_condition>
          <on_consequence>my_mod_option_consequence</on_consequence>
          <text>{=!}帮我打造一把自定义武器</text>
        </option>
      </menu>
    </menus>
  </game_menu>
</game_menus>
```

`on_condition` / `on_consequence` 里的字符串是**方法名**，引擎按名字在已注册的 `CampaignBehaviorBase` 上用反射找到对应方法。方法签名固定：

```csharp
// 条件：返回 true 才显示该选项；每帧菜单可见时都会被调用，必须轻量、纯函数
public bool my_mod_option_condition(MenuContext menuContext)
{
    return Hero.MainHero.IsNotable; // 举例：仅名人在场时显示
}

// 后果：点击后执行；想跳到自己的菜单就 SetNextMenu
public void my_mod_option_consequence(MenuContext menuContext)
{
    // 真实导航 API（游戏内 Barterable / GameMenu 都用这同一个调用）
    Campaign.Current.GameMenuManager.SetNextMenu("my_mod_menu");
}
```

### 2）从别处打开你的菜单

想让玩家「从城镇菜单跳进你的菜单」，在对应选项的 consequence 里同样调用：

```csharp
Campaign.Current.GameMenuManager.SetNextMenu("my_mod_menu");
```

退回上一级用 `ExitToLast()`；选项文本/条件变了需要重画用 `RefreshMenuOptions(menuContext)`；按序号主动执行某选项后果用 `RunConsequencesOfMenuOption(menuContext, index)`。

### 3）程序化加菜单/选项（无需 XML，适合动态场景）

若菜单 id 需要运行时决定，可在 `OnSessionLaunched` 里用 `CampaignGameStarter` 直接挂（`GetPresumedGameMenu` 会在菜单不存在时自动建一个，但**菜单文本必须自己 `AddGameMenu` 先设好**）：

```csharp
public void OnSessionLaunched(CampaignGameStarter starter)
{
    starter.AddGameMenu("my_mod_menu", "我的自定义菜单", null);
    starter.AddGameMenuOption(
        "my_mod_menu", "my_mod_option", "帮我打造一把自定义武器",
        new GameMenuOption.OnConditionDelegate(my_mod_option_condition),
        new GameMenuOption.OnConsequenceDelegate(my_mod_option_consequence));
}
```

## 最小可运行范例 B — 自定义对话行（Dialog）

对话行必须在 `OnSessionLaunched` 里通过 `CampaignGameStarter` 注册（游戏内 `BanditInteractionsCampaignBehavior` 就是这么做的）。`inputToken` 是「你在回应哪一句话的 token」，`outputToken` 是「你说完这句话后产生的 token，供下一句匹配」；`text` 是显示文本，用 `{=!}` 表示原文或 `{=ID}` 做本地化；`condition`/`consequence` 是 `ConversationSentence.OnConditionDelegate` / `OnConsequenceDelegate`（无参）。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation;   // ConversationSentence
using TaleWorlds.CampaignSystem.GameMenus;       // GameMenuOption, MenuContext
using TaleWorlds.Core;                           // IGameStarter
using TaleWorlds.Localization;                   // TextObject
using TaleWorlds.MountAndBlade;                  // MBSubModuleBase

public class MyDialogBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // OnSessionLaunched 在每次会话启动（新游戏/读档）时触发，带 CampaignGameStarter
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(
            this, new Action<CampaignGameStarter>(this.OnSessionLaunched));
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        this.AddMyDialogs(starter);
    }

    private void AddMyDialogs(CampaignGameStarter starter)
    {
        // 玩家选项：inputToken 接 "lord_pretalk"，outputToken 产出 "my_mod_talk"
        starter.AddPlayerLine(
            "my_mod_player_line",          // id（务必唯一、带前缀，避免与其它 mod 撞 id）
            "lord_pretalk",                // inputToken：在哪个节点后出现
            "my_mod_talk",                 // outputToken：说完跳到哪个节点
            "{=!}我想委托你一件特别的事。", // text
            new ConversationSentence.OnConditionDelegate(MyLineCondition),
            new ConversationSentence.OnConsequenceDelegate(MyLineConsequence));

        // NPC 回话：inputToken 接上句的 outputToken
        starter.AddDialogLine(
            "my_mod_npc_reply",
            "my_mod_talk",
            "lord_pretalk",                // 回到领主常规对话节点，形成闭环
            "{=!}有意思，说来听听。",
            null,                          // 无条件
            new ConversationSentence.OnConsequenceDelegate(MyReplyConsequence));
    }

    private bool MyLineCondition() => Hero.MainHero.Clan != null;
    private void MyLineConsequence() { /* 仅对话逻辑；改世界状态仍走 *Action.Apply */ }
    private void MyReplyConsequence() { /* 同上 */ }

    public override void SyncData(IDataStore dataStore) { } // 本行为无自定义状态
}
```

### 为什么这样写（对照契约）

| 步骤 | 真实 API | 错写法（会卡菜单 / 刷屏 / 不显示） |
|------|----------|-----------------------------------|
| 挂对话 | `starter.AddPlayerLine(id, inputToken, outputToken, text, cond, cons)` | 在 `RegisterEvents` 之外、`OnSessionLaunched` 之前就调（拿不到 `starter`） |
| 跳菜单 | `Campaign.Current.GameMenuManager.SetNextMenu("id")` | 在 `condition` 里 `SetNextMenu`（条件每帧跑，会反复跳） |
| XML 方法名 | `on_condition` / `on_consequence` 必须等于 Behavior 里的方法名 | 拼写错 → 引擎反射找不到方法，选项**静默不显示** |
| 选项条件 | `bool X(MenuContext)` 轻量纯函数 | 在条件里改世界状态 / 跑重计算（每帧执行，卡顿+状态错乱） |
| 程序化选项 | 先 `AddGameMenu(id,text,null)` 再 `AddGameMenuOption(...)` | 只调 `AddGameMenuOption` 不先建菜单 → 菜单无文本 |

## 依赖关系（可点击）

- **上游 / 入口**
  - [MBSubModuleBase](../../api/core/MBSubModuleBase/) — `OnGameStart` 注册 Behavior 的总入口
  - [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — `AddGameMenu` / `AddGameMenuOption` / `AddPlayerLine` / `AddDialogLine` 的唯一落点
- **本页主角**
  - [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — `RegisterEvents` / `OnSessionLaunched` 契约
  - [GameMenuManager](../../api/campaign-ext/GameMenuManager/) — `SetNextMenu` / `ExitToLast` / `GetGameMenu` 运行时导航
  - [GameMenu](../../api/campaign-ext/GameMenu/) / [GameMenuOption](../../api/campaign-ext/GameMenuOption/) — 菜单与选项的运行时对象
  - [ConversationManager](../../api/campaign-ext/ConversationManager/) / [ConversationSentence](../../api/campaign-ext/ConversationSentence/) — 对话行注册与表示
- **下游 / 系统**
  - [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — `OnSessionLaunchedEvent` 等全部可订阅事件
  - [Actions 总则](../../api/campaign-ext/actions/) — 对话/菜单后果里若要改世界（给钱、杀人、改关系），必须走 `*Action.Apply`
  - [Hero](../../api/campaign/Hero/) — 对话/菜单条件常用的实体
- **若你要改数值计算**（而非加菜单/对话）：走 [GameModels](../../api/campaign-ext/GameModels/) + [Models 家族手册](../../api/campaign-ext/models/)，见 [下一篇实战（自定义模型）](../sandbox-custom-model/)。

## 风险段（触达即必读）

1. **菜单 `on_condition` 每帧都被调用**——必须轻量且是纯判断，绝不在条件里改世界状态或跑重逻辑；否则既卡顿又会让状态乱跳。
2. **`on_condition` / `on_consequence` 字符串必须和 Behavior 方法名完全一致**；拼错不会报错，只是选项/后果静默失效，极难排查。用带前缀的唯一名（如 `my_mod_xxx`）。
3. **对话行 id 要全局唯一**：不同 mod 撞 id 会互相覆盖或行为错乱；务必加你的 mod 前缀。
4. **导航只在 consequence 里做**：`SetNextMenu` / `ExitToLast` 属于「点击后的后果」，放在 `condition` 里会每帧触发，把玩家卡在菜单循环。
5. **对话里改世界状态也要走 `*Action.Apply`**：consequence 里直接改 `Hero.Gold` / 关系值会跳过事件级联与 AI 同步（见 [崩溃边界 · 世界变更须走 Action](../../architecture/crash-boundaries/)）。
6. **程序化加选项要先 `AddGameMenu`**：`AddGameMenuOption` 依赖菜单已存在且文本已设；只加选项不加菜单，菜单会没有标题文本。
7. **`OnSessionLaunched` 在新游戏和读档都会触发**：挂菜单/对话本身是幂等的（`GetPresumedGameMenu` 复用、同 id 行覆盖），但不要在这里做「一次性初始化」的副作用（如发钱、建数据）——那要放到事件回调里并按 `SyncData` 防重。

## 导航

- ↑ 父级：[指南总览](../)
- ↔ 同级：[第一篇实战（能存盘的 Behavior）](../sandbox-extension-example/) · [自定义数值模型（Model）](../sandbox-custom-model/) · [Campaign 系统](../campaign-system/) · [SandBox/StoryMode/Native 阅读政策](../../architecture/sandbox-native-policy/)
- ↓ 相关 API：[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [GameMenuManager](../../api/campaign-ext/GameMenuManager/) · [ConversationManager](../../api/campaign-ext/ConversationManager/) · [Actions 总则](../../api/campaign-ext/actions/)
- 🔀 任务索引：[开发者任务路线图](../../architecture/developer-roadmap/)
