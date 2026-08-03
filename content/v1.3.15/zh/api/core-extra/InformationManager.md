---
title: "InformationManager"
description: "游戏内玩家消息与模态对话框的统一出口：所有 DisplayMessage / ShowInquiry 调用都只是把事件转发给已订阅的 Gauntlet UI 层。"
---
# InformationManager

**Namespace:** TaleWorlds.Library  
**Module:** TaleWorlds.Library  
**Type:** `public static class InformationManager`  
**Base:** 无（静态类，不可继承、不可实例化）  
**File:** `TaleWorlds.Library/InformationManager.cs`

## 概述

`InformationManager` 是 Bannerlord 向玩家**推送界面反馈**的唯一公开入口：右下角的通知消息、模态确认/询问对话框、物品提示（tooltip）、系统通知都经由它。但它本身**不渲染、不持有任何 UI**，而是把每次调用转交给一组 `static event` 委托（`DisplayMessageInternal`、`OnShowInquiry`、`OnShowTextInquiry`、`OnAddSystemNotification` 等）。真正订阅这些事件、把它们变成屏幕上可见元素的，是 Gauntlet UI 层（例如战役/任务界面里的对应 ViewModel）。

换句话说，`InformationManager` 是一根“电线”：你按下开关（`DisplayMessage` / `ShowInquiry`），电流只有在线另一端有人接了灯泡（UI 层已订阅事件）时才会亮。MODULE 加载阶段、主菜单还没进入战役、或 UI 影片尚未初始化时，这些事件的订阅者为 `null`，此时调用会**静默丢弃**（见 `InformationManager.cs` 里每个方法开头的 `if (xxx == null) return;`）。这是它最重要的运行时特征，也是 mod 最容易踩的坑。

## 心智模型

把它理解成**游戏与 UI 之间的消息总线**，而不是一个“管理器对象”：

- 它是 `static class`，不需要、也不能 `new`。所有调用形如 `InformationManager.DisplayMessage(...)`，没有实例、没有 `Current`、没有 `Game.Instance` 之类的持有者。
- 它本身没有任何状态（除了 tooltip 注册表 `RegisteredTypes`）。一切副作用都发生在订阅端——即 Gauntlet UI 层的回调里。你从 `CampaignBehavior` 或 `MissionBehavior` 里调用它，最终由 UI 线程把消息画出来。
- **它只用于“反馈”，不用于“逻辑”。** 不要把游戏判定、存档、状态变更写进 `affirmativeAction` 之外的任何地方；对话框的按钮回调才是玩家选择的结果，消息本身只是单向广播。
- 订阅关系由 UI 层在进入场景/菜单时建立，在离开或关闭时通过 `InformationManager.Clear()` 全部清空（见源码 `Clear()` 把各事件置 `null`）。所以**早于 UI 就绪的调用会被吃掉**，且不会报错。

同命名空间下还有一个更贴近“战役地图”的高层助手 `MBInformationManager`（同样在 `TaleWorlds.Core`），提供 `AddQuickInformation`、`ShowMultiSelectionInquiry`、`AddNotice`（地图通告）、`ShowSceneNotification` 等。本页只覆盖 `InformationManager` 本身；需要快速飘字/多选对话框/地图通告时应去看那个类，而不是在这里找 `AddQuickInformationMessage` 之类并不存在的方法。

## 如何调用 InformationManager

全程是静态方法，无需获取实例：

```csharp
// 推送一条普通通知（最常用）
InformationManager.DisplayMessage(new InformationMessage("Hello, player!"));

// 弹出一个“是/否”模态询问
InformationManager.ShowInquiry(new InquiryData(
    "确认", "确定要执行吗？",
    true, true, "是", "否",
    () => { /* 玩家点了“是” */ },
    () => { /* 玩家点了“否” */ }));

// 让玩家输入一段文字
InformationManager.ShowTextInquiry(new TextInquiryData(
    "命名", "请输入名称：",
    true, true, "确定", "取消",
    (string input) => { /* 拿到玩家输入的 input */ },
    () => { }));

// 查询当前是否已经有对话框在显示（避免叠对话框）
if (!InformationManager.IsAnyInquiryActive())
{
    InformationManager.ShowInquiry(...);
}
```

在 mod 里，绝大多数调用发生在 `CampaignBehaviorBase` 的 tick/事件、`MissionBehavior` 的回调，或某个 ViewModel 的命令里——即“游戏逻辑已经算完、现在要告诉玩家”的那一刻。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `RegisteredTypes` | `IReadOnlyDictionary<Type, TooltipRegistry>` | 已通过 `RegisterTooltip<TRegistered, TTooltip>` 注册的“某数据类型 → 对应 tooltip 影片”映射表。只读；这是 `InformationManager` 唯一对外公开的属性，主要给 UI 层查找“鼠标悬停某对象时该播哪个 Gauntlet 影片”用，mod 一般不直接读写。 |

> 另外两个公开字段 `IsAnyInquiryActiveInternal`（`Func<bool>`）与 `IsAnyTooltipActiveInternal`（`IsAnyTooltipActiveDelegate`）不是给 modder 用的“属性”，而是 UI 层回填空 / 非空（是否正有询问或提示激活）的回调钩子；`InformationManager` 的 `IsAnyInquiryActive()` / `GetIsAnyTooltipActive()` 正是读取它们。订阅者为 `null` 时这些方法直接返回 `false`。

## 主要方法

所有方法都是 `static`，签名省略 `static` 前缀以便阅读。每个方法内部都是“取事件委托 → 为空就 return → 否则 `Invoke`”，因此**订阅者缺失 = 调用被忽略**。

### 消息通知

#### `void DisplayMessage(InformationMessage message)`
把一条 `InformationMessage` 广播到右下角通知流。消息内容、颜色、音效、分类都在 `InformationMessage` 上设置。若 `DisplayMessageInternal` 没有被 UI 层订阅，这条消息被静默丢弃。

```csharp
// 来自原版 NotableSupportersCampaignBehavior 的真实写法：一条绿色提示
TextObject textObject = new TextObject("{=...}你的家族声望提升了。");
InformationManager.DisplayMessage(
    new InformationMessage(textObject.ToString(), new Color(0f, 1f, 0f, 1f)));
```

#### `void AddSystemNotification(string message)`
推送一条系统级通知（比普通消息更“硬”，常用于模块初始化/报错提示），走独立的 `OnAddSystemNotification` 事件。

```csharp
InformationManager.AddSystemNotification("MyMod: 配置文件已重新加载。");
```

#### `void HideAllMessages()` / `void ClearAllMessages()`
分别通知 UI 层隐藏当前所有通知、清空通知列表（通过 `HideAllMessagesInternal` / `ClearAllMessagesInternal`）。常在切换界面、关闭菜单时调用，避免旧消息堆积。

```csharp
// 进入战斗前清掉地图上的通知残留
InformationManager.ClearAllMessages();
```

### 模态询问（对话框）

#### `void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`
弹出标准的“确认/取消”模态对话框。`data` 携带标题、正文、按钮文案与点击回调；`pauseGameActiveState` 透传给 UI 层以决定是否在弹窗时暂停游戏循环；`prioritize` 控制是否插到队列最前。

```csharp
// 来自 CompanionRolesCampaignBehavior 的真实写法
TextObject textObject = new TextObject("{=...}将这名同伴晋升为领主？");
InformationManager.ShowInquiry(
    new InquiryData(
        new TextObject("{=...}确认？").ToString(),
        textObject.ToString(),
        true, true,
        new TextObject("{=...}是").ToString(),
        new TextObject("{=...}否").ToString(),
        new Action(CompanionRolesCampaignBehavior.ConfirmTurningCompanionToLordConsequence),
        new Action(CompanionRolesCampaignBehavior.RejectTurningCompanionToLordConsequence),
        "", 0f, null, null, null),
    false, false);
```

#### `void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)`
弹出带有输入框的对话框，让玩家填写文字（如命名、数量）。`affirmativeAction` 是 `Action<string>`，参数为玩家输入；`IsInputObfuscated` 可用于密码类输入，`TextCondition` 用于实时校验输入合法性。

```csharp
InformationManager.ShowTextInquiry(
    new TextInquiryData(
        "命名部队", "请输入部队名称：",
        true, true, "确定", "取消",
        (string input) => { /* input 即玩家输入，可用于命名 MobileParty */ },
        () => { },
        shouldInputBeObfuscated: false,
        textCondition: (string s) => new Tuple<bool, string>(s.Length > 0, "名称不能为空"),
        defaultInputText: "新部队"));
```

#### `void HideInquiry()`
主动关闭当前询问对话框（通过 `OnHideInquiry`）。一般在超时或外部状态变化需要取消弹窗时调用。

#### `bool IsAnyInquiryActive()`
返回当前是否已有询问对话框在显示。其实现读取 `IsAnyInquiryActiveInternal` 回调；订阅者为 `null` 时返回 `false`。在可能连续触发弹窗的逻辑里先查它，可避免对话框层层叠加。

```csharp
if (!InformationManager.IsAnyInquiryActive())
{
    InformationManager.ShowInquiry(...);
}
```

### 提示（Tooltip）

#### `void ShowTooltip(Type type, params object[] args)` / `void HideTooltip()`
请求 UI 层显示/隐藏与某个数据类型绑定的 tooltip 影片（配合 `RegisterTooltip`）。游戏内物品悬停、地图元素悬停走这条通道；`MBInformationManager.ShowHint(string)` 内部就是调用了 `InformationManager.ShowTooltip(typeof(string), ...)`.

#### `bool GetIsAnyTooltipActive()` / `bool GetIsAnyTooltipActiveAndExtended()`
读取当前是否有 tooltip 正在显示，以及是否处于“扩展”状态。同样依赖 `IsAnyTooltipActiveInternal` 回调，未订阅时返回 `false`。

#### `void RegisterTooltip<TRegistered, TTooltip>(Action<TTooltip, object[]> onRefreshData, string movieName)` / `void UnregisterTooltip<TRegistered>()`
向 `RegisteredTypes` 注册“数据类型 `TRegistered` ↔ tooltip 视图模型 `TTooltip`（须继承 `TooltipBaseVM`）↔ Gauntlet 影片名 `movieName`”的映射，并提供一个刷新数据的回调。`UnregisterTooltip` 在模块卸载/类型不再需要时移除映射（会 `Debug.Print` 一行日志）。这是 UI/模块作者扩展悬停提示用的，普通 mod 很少直接碰。

### 生命周期

#### `void Clear()`
把所有事件委托与回调钩子置 `null`，相当于“拔掉电线”。源码里在 UI 层关闭/游戏退出时被调用，防止旧的订阅者继续收到已销毁场景的消息。mod 一般无需主动调用。

## 典型用法示例

### 示例 1：在 CampaignBehavior 的每日 tick 里给玩家一条战斗/状态日志

```csharp
protected override void DailyTick()
{
    if (Hero.MainHero.IsWounded)
    {
        // 绿色通知：沿用原版 NotableSupportersCampaignBehavior 的配色写法
        TextObject msg = new TextObject("{=mymod_wounded}你的英雄仍负伤，正在恢复中。");
        InformationManager.DisplayMessage(
            new InformationMessage(msg.ToString(), new Color(0f, 1f, 0f, 1f)));
    }
}
```

### 示例 2：从 CampaignBehavior 弹出一个“是/否”确认对话框并响应选择

```csharp
private void AskPlayerToConfirmRaid()
{
    if (InformationManager.IsAnyInquiryActive())
        return; // 已经有对话框，避免叠加

    InformationManager.ShowInquiry(
        new InquiryData(
            new TextObject("{=mymod_raid_title}突袭村庄？").ToString(),
            new TextObject("{=mymod_raid_body}突袭将降低你的声望，确定继续？").ToString(),
            isAffirmativeOptionShown: true,
            isNegativeOptionShown: true,
            affirmativeText: GameTexts.FindText("str_yes").ToString(),
            negativeText: GameTexts.FindText("str_no").ToString(),
            affirmativeAction: () => ExecuteRaid(),
            negativeAction: () => { },
            soundEventPath: "",
            expireTime: 0f,
            timeoutAction: null,
            isAffirmativeOptionEnabled: null,
            isNegativeOptionEnabled: null),
        pauseGameActiveState: false,
        prioritize: false);
}

private void ExecuteRaid()
{
    // 玩家确认后的真正逻辑
}
```

### 示例 3：让玩家为新建的部队输入名称

```csharp
private void PromptForPartyName(MobileParty party)
{
    InformationManager.ShowTextInquiry(
        new TextInquiryData(
            titleText: "命名部队",
            text: "请输入部队名称：",
            isAffirmativeOptionShown: true,
            isNegativeOptionShown: true,
            affirmativeText: GameTexts.FindText("str_ok").ToString(),
            negativeText: GameTexts.FindText("str_cancel").ToString(),
            affirmativeAction: (string input) =>
            {
                if (!string.IsNullOrWhiteSpace(input))
                    party.Name = new TextObject(input);
            },
            negativeAction: () => { },
            shouldInputBeObfuscated: false,
            textCondition: (string s) => new Tuple<bool, string>(s.Length <= 24, "名称过长"),
            defaultInputText: "新部队"));
}
```

## 风险与崩溃边界

- **UI 层未就绪时调用会被静默丢弃。** `OnSubModuleLoad`、`OnSubModuleInitialize`、或在战役真正开始之前（主菜单、加载画面）调用 `DisplayMessage` / `ShowInquiry`，由于对应事件尚未被 Gauntlet UI 订阅，方法直接 `return`，既不报错也不显示。需要“启动时告诉玩家”的信息，应推迟到 `OnGameStart` / `CampaignBehavior` 的 `RegisterEvents` 之后，或改用日志/配置文件。
- **不要把它当日志系统用。** 它面向玩家、依赖 UI 线程。频繁、海量的 `DisplayMessage` 会刷屏且全部走 UI 层；纯调试输出应使用 `Debug.Print`，而非 `InformationManager`。
- **模态询问会阻塞交互。** `ShowInquiry` 弹出的是模态对话框，玩家在回应前无法操作游戏；若在高频 tick（如 `HourlyTick`、`DailyTick`）里无条件弹窗，会严重打断体验。`pauseGameActiveState: true` 还会请求 UI 层暂停游戏循环，逻辑上必须与当前场景状态匹配，否则可能让游戏卡在暂停态。
- **叠对话框。** 多个 `ShowInquiry` 连续触发会层层覆盖/排队。正式弹窗前务必用 `IsAnyInquiryActive()` 判断，或设置 `prioritize` 控制顺序。
- **传入错误的对话框数据类型。** `ShowInquiry` 只接受 `InquiryData`，`ShowTextInquiry` 只接受 `TextInquiryData`；把需要输入的场景误用 `InquiryData` 会丢掉输入框，`affirmativeAction` 的签名也分别是 `Action` 与 `Action<string>`，回调里拿不到文本。需要多选/地图通告/场景通知时，应改用 `MBInformationManager` 的对应方法，而不是硬塞给 `InformationManager`。
- **跨线程调用。** 事件由 UI 层在主线程订阅；若从异步/后台线程调用，回调会在调用者线程上执行，可能触碰非线程安全的 UI 状态。游戏逻辑应在主线程上调用这些方法。
- **关于 `ShowMessageBox` / `AddQuickInformationMessage` / `DisplayMessageFromText`。** 这些方法**不是** `InformationManager` 的成员：原版里“原生 Win32 消息框”是 `Debug.ShowMessageBox` / `MBDebug.ShowMessageBox`（用于致命报错，与 Gauntlet UI 无关）；“快速飘字”是 `MBInformationManager.AddQuickInformation`；“从纯文本显示一条消息”等价于 `InformationManager.DisplayMessage(new InformationMessage(text))`。不要在代码里写不存在的方法名。

## 跨版本提示

- **v1.3.15 与 v1.4.5 的 `InformationManager` 公开成员一致**：`DisplayMessage`、`AddSystemNotification`、`ShowInquiry`、`ShowTextInquiry`、`HideInquiry`、`IsAnyInquiryActive`、`ShowTooltip`/`HideTooltip`、`GetIsAnyTooltipActive`/`GetIsAnyTooltipActiveAndExtended`、`RegisterTooltip`/`UnregisterTooltip`、`Clear`、属性 `RegisteredTypes`，以及对应的内部事件/回调字段。两版行为完全相同——都是把调用转发给静态事件委托；唯一差异是 1.4.5 源码改用 `?.Invoke()` 语法糖，1.3.15 是显式 `null` 判断，对调用方无影响。
- 需要 `AddQuickInformation`（飘字）、`ShowMultiSelectionInquiry`（多选）、`AddNotice`（地图通告）、`ShowSceneNotification`（场景通知）时，这些从 1.3.x 起就在 `MBInformationManager`（`TaleWorlds.Core`）上，不在 `InformationManager`；跨版本写 mod 时若用到它们，请直接依赖 `MBInformationManager` 而不是假设 `InformationManager` 会新增这些方法。

## 依赖关系

- 上游：[TextObject](../../localization/TextObject) 提供可本地化的消息和询问文本。
- 下游：消息队列、询问窗口和 [ScreenManager](../../gui/ScreenManager) 负责显示与销毁 UI。
- 生命周期：只在有效 UI 阶段调用；战役状态变更仍由 [CampaignEvents](../../campaign-ext/CampaignEvents) 或 Action 负责。

## 参见

- [Game](../Game/) — 游戏世界入口，很多行为在 `OnGameStart` 之后才有 UI 层可接收消息
- [ViewModel](../ViewModel/) — Gauntlet UI 视图模型层，正是它订阅了 `InformationManager` 的各事件
- [TextObject](../../localization/TextObject/) — 消息/对话框文本用 `TextObject` 承载本地化字符串，`InformationMessage` 与 `InquiryData` 的文案都来自它
- [本区域目录](../) — core-extra 全部 API 索引
- [API 根目录](../../) — 所有命名空间桶索引
