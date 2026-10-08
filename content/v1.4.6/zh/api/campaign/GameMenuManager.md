---
title: "GameMenuManager"
description: "对话菜单管理器：维护菜单注册表与「下一个要显示的菜单」状态，把 UI 层的虚拟菜单选项索引映射到真实菜单选项，并驱动菜单刷新、条件判定与选项后果执行。"
---
# GameMenuManager

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuManager`
**Source:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`GameMenuManager` 是战役对话菜单系统的**调度中枢**：它维护一张「菜单 ID → `GameMenu` 对象」的注册表，记录「下一个要显示的菜单」（`NextGameMenuId`），并把 UI 层使用的**虚拟菜单选项索引**映射到真实菜单选项上。它通过 `Campaign.Current.GameMenuManager` 暴露。

它解决的核心问题是：对话菜单在 UI 上显示为一列选项，但选项列表是动态的——同一个菜单对不同对象、不同状态会显示不同选项。UI 只持有一个「虚拟索引」，由 `GameMenuManager` 在渲染时把它翻译成真实的 `GameMenuOption`，再取文本、提示、启用状态、是否「离开」等属性。类共 623 行，其中约一半是这种「虚拟索引 → 真实选项」的映射方法。

## 心智模型

**它是「菜单的注册表 + 虚拟索引翻译器」，不是「菜单内容本身」。**

- **它管「菜单在哪」**：`AddGameMenu` / `GetGameMenu` / `RemoveRelatedGameMenus` 维护菜单注册表；菜单内容（选项列表、文本、条件）在 `GameMenu` 对象里。
- **它管「下一个菜单是谁」**：`NextGameMenuId` + `SetNextMenu` 构成一个「待显示」状态机——对话系统先 `SetNextMenu("menu_xxx")`，渲染层再问 `NextMenu` 拿到对象。
- **它管「虚拟索引怎么翻译」**：`GetVirtualMenuOptionText` / `GetVirtualMenuOptionTooltip` / `GetVirtualMenuOptionIsEnabled` 等十几个方法，把 UI 的虚拟索引按「重复对象列表」规则映射到真实选项。
- **它管「选项后果怎么执行」**：`RunConsequencesOfMenuOption` 把用户点的选项交给 `GameMenu.RunMenuOptionConsequence` 执行——对话选项的真正效果在这里触发。

**什么是「虚拟索引」**：当一个菜单对一组重复对象显示时（例如「对每个村民询问」），UI 只渲染一个选项模板，但每个对象对应一个虚拟索引。`GetVirtualMenuOptionAmount` 返回「真实选项数 - 1 + 重复对象数」，`GetVirtualMenuOptionText` 等方法按索引落在重复对象区间还是真实选项区间，分别取文本。

**一个常见误用**：直接 `new GameMenuManager()`。它由 `Campaign` 持有（`Campaign.Current.GameMenuManager`），mod 应该通过 Campaign 实例访问，自己 new 出来的实例不在菜单系统里，`SetNextMenu` 不会生效。

## 怎么用

### 怎么拿到

```csharp
GameMenuManager mgr = Campaign.Current.GameMenuManager;
```

### 典型用法

```csharp
// 注册一个自定义菜单
mgr.AddGameMenu(myGameMenu);

// 查询下一个要显示的菜单
GameMenu next = mgr.NextMenu;

// 设置下一个要显示的菜单（对话系统常用）
mgr.SetNextMenu("menu_my_custom");

// 每帧驱动当前菜单（等待菜单的进度条靠它推进）
mgr.OnFrameTick(Campaign.Current.CurrentMenuContext, dt);

// 执行某个选项的后果
mgr.RunConsequencesOfMenuOption(Campaign.Current.CurrentMenuContext, 0);
```

菜单注册表相关：`AddGameMenu`（`GameMenuManager.cs:547`）注册菜单，`GetGameMenu`（`GameMenuManager.cs:598`）按 ID 查菜单，`RemoveRelatedGameMenus`（`GameMenuManager.cs:553`）在关联对象销毁时清掉相关菜单。

### 坑

- **`NextMenu` 可能为 null**。`NextGameMenuId` 为 null 或指向未注册的菜单时，`NextMenu` 返回 null，渲染层需要处理。
- **`GetVirtualMenuOptionAmount` 的计数规则**：没有重复对象时返回 `MenuItemAmount`；有重复对象时返回 `MenuItemAmount - 1 + MenuRepeatObjects.Count`——第一个真实选项被重复对象「顶替」了。
- **`GetMenuOptionConditionsHold` 会抛异常**。`menuContext.GameMenu` 为 null 时抛 `MBMisuseException`，不是返回 false。
- **`RemoveRelatedGameMenuOptions` 只删选项不删菜单**。它和 `RemoveRelatedGameMenus` 是配套的：前者清选项，后者清整个菜单。
- **`MenuLocations` 是位置历史栈**。`NextLocation` / `PreviousLocation` / `MenuLocations` 记录菜单打开的位置上下文，供「返回」逻辑使用。

## 关键成员

### 菜单注册表

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| 类声明 | `public class GameMenuManager` | 对话菜单调度中枢，623 行；由 `Campaign` 持有 | `GameMenuManager.cs:13` |
| `NextGameMenuId` | `string NextGameMenuId { get; private set; }` | 下一个要显示的菜单 ID；`SetNextMenu` 写、`NextMenu` 读 | `GameMenuManager.cs:18` |
| `NextMenu` | `GameMenu NextMenu { get; }` | 按 `NextGameMenuId` 查出的菜单对象，查不到返回 null | `GameMenuManager.cs:29` |
| `SetNextMenu` | `void SetNextMenu(string name)` | 设置下一个要显示的菜单 ID | `GameMenuManager.cs:40` |
| `ExitToLast` | `void ExitToLast()` | 退出到上一个菜单（通过 `MapState.ExitMenuMode`） | `GameMenuManager.cs:46` |
| `AddGameMenu` | `void AddGameMenu(GameMenu gameMenu)` | 把菜单按 `StringId` 注册进表 | `GameMenuManager.cs:547` |
| `RemoveRelatedGameMenus` | `void RemoveRelatedGameMenus(object relatedObject)` | 清掉所有 `RelatedObject` 指向给定对象的菜单 | `GameMenuManager.cs:553` |
| `RemoveRelatedGameMenuOptions` | `void RemoveRelatedGameMenuOptions(object relatedObject)` | 清掉所有菜单中 `RelatedObject` 指向给定对象的选项 | `GameMenuManager.cs:570` |
| `GetGameMenu` | `GameMenu GetGameMenu(string menuId)` | 按 ID 查菜单，查不到返回 null | `GameMenuManager.cs:598` |

### 菜单选项执行

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SetCurrentRepeatableIndex` | `void SetCurrentRepeatableIndex(MenuContext menuContext, int index)` | 设置当前重复对象列表的选中索引 | `GameMenuManager.cs:83` |
| `GetMenuOptionConditionsHold` | `bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)` | 判断某选项的启用条件是否满足；菜单为空时抛异常 | `GameMenuManager.cs:97` |
| `RefreshMenuOptions` | `void RefreshMenuOptions(MenuContext menuContext)` | 触发 `menuContext.Handler.OnMenuRefresh()` 重建选项列表 | `GameMenuManager.cs:118` |
| `RefreshMenuOptionConditions` | `void RefreshMenuOptionConditions(MenuContext menuContext)` | 对每个虚拟选项重跑条件判定 | `GameMenuManager.cs:134` |
| `GetMenuOptionIdString` | `string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)` | 取选项的 ID 字符串（用于日志/存档） | `GameMenuManager.cs:154` |
| `RunConsequencesOfMenuOption` | `void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)` | 执行某选项的后果（对话选项的真正效果在这里触发） | `GameMenuManager.cs:179` |

### 虚拟菜单选项（UI 层映射）

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetVirtualMenuOptionTooltip` | `TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 选项提示文本 | `GameMenuManager.cs:212` |
| `GetMenuOverlayType` | `GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)` | 取菜单覆盖层类型 | `GameMenuManager.cs:234` |
| `GetVirtualMenuOptionText` | `TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 选项主文本 | `GameMenuManager.cs:244` |
| `GetVirtualGameMenuOption` | `GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 真实 `GameMenuOption` 对象 | `GameMenuManager.cs:266` |
| `GetVirtualMenuOptionText2` | `TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 选项副文本 | `GameMenuManager.cs:281` |
| `GetVirtualMenuProgress` | `float GetVirtualMenuProgress(MenuContext menuContext)` | 取菜单进度（等待菜单用） | `GameMenuManager.cs:303` |
| `GetVirtualMenuAndOptionType` | `GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)` | 取菜单/选项类型 | `GameMenuManager.cs:317` |
| `GetVirtualMenuIsWaitActive` | `bool GetVirtualMenuIsWaitActive(MenuContext menuContext)` | 等待菜单是否激活 | `GameMenuManager.cs:327` |
| `GetVirtualMenuTargetWaitHours` | `float GetVirtualMenuTargetWaitHours(MenuContext menuContext)` | 等待菜单的目标小时数 | `GameMenuManager.cs:341` |
| `GetVirtualMenuOptionIsEnabled` | `bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 选项是否启用 | `GameMenuManager.cs:355` |
| `GetVirtualMenuOptionAmount` | `int GetVirtualMenuOptionAmount(MenuContext menuContext)` | 虚拟选项总数 = 真实选项数 - 1 + 重复对象数 | `GameMenuManager.cs:377` |
| `GetVirtualMenuOptionIsLeave` | `bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 是否「离开」选项 | `GameMenuManager.cs:400` |
| `GetLeaveMenuOption` | `GameMenuOption GetLeaveMenuOption(MenuContext menuContext)` | 取「离开」选项对象 | `GameMenuManager.cs:422` |
| `GetVirtualMenuOptionConditionsHold` | `bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)` | 虚拟索引 → 条件是否满足 | `GameMenuManager.cs:460` |

### 帧驱动与文本

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `OnFrameTick` | `void OnFrameTick(MenuContext menuContext, float dt)` | 每帧驱动当前菜单的 `RunOnTick`（等待菜单进度条） | `GameMenuManager.cs:482` |
| `GetMenuText` | `TextObject GetMenuText(MenuContext menuContext)` | 取菜单主文本 | `GameMenuManager.cs:491` |

### 公共字段

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `PreviouslySelectedGameMenuItem` | `int PreviouslySelectedGameMenuItem = -1` | 上一个选中的菜单项索引，默认 -1 | `GameMenuManager.cs:609` |
| `NextLocation` | `Location NextLocation` | 下一个要打开菜单的位置 | `GameMenuManager.cs:612` |
| `PreviousLocation` | `Location PreviousLocation` | 上一个菜单位置 | `GameMenuManager.cs:615` |
| `MenuLocations` | `List<Location> MenuLocations = new List<Location>()` | 菜单位置历史栈 | `GameMenuManager.cs:618` |
| `PreviouslySelectedGameMenuObject` | `object PreviouslySelectedGameMenuObject` | 上一个选中的菜单对象 | `GameMenuManager.cs:621` |

## 真实示例

```csharp
// 一个 CampaignBehavior：打开自定义等待菜单，按帧推进，到点后执行后果
public class MyWaitMenuBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionStart.AddNonSerializedListener(this, this.OnStart);
    }

    private void OnStart(CampaignGameStarter starter)
    {
        GameMenuManager mgr = Campaign.Current.GameMenuManager;
        mgr.SetNextMenu("menu_my_wait");
    }

    public void TickCurrentMenu(float dt)
    {
        GameMenuManager mgr = Campaign.Current.GameMenuManager;
        mgr.OnFrameTick(Campaign.Current.CurrentMenuContext, dt);
    }

    public void RunSelectedOption(int index)
    {
        GameMenuManager mgr = Campaign.Current.GameMenuManager;
        mgr.RunConsequencesOfMenuOption(
            Campaign.Current.CurrentMenuContext, index);
    }
}
```

## 参见

- [`../Campaign`](../Campaign) — 战役根对象，`Campaign.Current.GameMenuManager` 的持有者。
- [`../CampaignGameStarter`](../CampaignGameStarter) — 游戏启动器，对话菜单系统的初始化者。
- [`../MobileParty`](../MobileParty) — 移动部队实体，菜单选项的常见关联对象。
- [`../Settlement`](../Settlement) — 聚落实体，菜单选项的常见关联对象。
- [`../Hero`](../Hero) — 英雄实体，对话菜单的常见关联对象。

## 导航

- 同桶：[`../Campaign`](../Campaign) · [`../CampaignGameStarter`](../CampaignGameStarter) · [`../MobileParty`](../MobileParty) · [`../Settlement`](../Settlement) · [`../Hero`](../Hero)
- 父索引：[`../_index`](../_index)
