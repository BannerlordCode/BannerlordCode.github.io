---
title: "InformationManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InformationManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationManager

**命名空间:** TaleWorlds.Library  
**模块:** TaleWorlds.Library  
**类型:** static class

Bannerlord 中向玩家显示屏幕消息、询问对话框（是/否）与工具提示的主要入口点。这个静态类将所有显示请求转发给由游?UI 层订阅的内部事件，因此是 Mod 作者与玩家进行信息交互的标准方式?
## 概述

InformationManager 是一个纯转发器：每个公共方法都检查对应的内部事件/委托是否已被订阅，若是则调用它，否则静默返回（空操作）。这些事件由游戏的活动屏幕（如地图界面、任务界面）在激活时挂接。这意味着在没有屏幕处理消息时调用这些方法不会产生任何可见效果，也不会抛出异常?
?Mod 作者而言，最常用的入口是 

`DisplayMessage

`（显示一条屏幕消息）、`ShowInquiry

`（显示是/否对话框）、`ShowTextInquiry

`（显示带文本输入的对话框）以?

`ShowTooltip

` / 

`HideTooltip

`（显?隐藏工具提示）?
## 
## 心智模型

先把 `InformationManager` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
静态属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| RegisteredTypes \| IReadOnlyDictionary&lt;Type, TooltipRegistry&gt; \| 已注册的工具提示类型表，键为被注册的数据类型，值为对应?TooltipRegistry \|

## 静态方?
### DisplayMessage

`

`

`csharp
public static void DisplayMessage(InformationMessage message)
`

`

`

显示一条屏幕消息（游戏左下角的消息条）。这是向玩家展示提示信息的主要方法?
**参数:**
- 

`message

` - 一?

`InformationMessage

`，包含正?

`Information

`、可?

`Detail

`、`Color

`、`SoundEventPath

` ?

`Category

`

?

`DisplayMessageInternal

` 事件未被订阅，调用将被忽略?
### ShowInquiry

`

`

`csharp
public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)
`

`

`

显示一个询问对话框（通常为带“是/否”按钮的模态弹窗）?
**参数:**
- 

`data

` - 描述标题、正文、按钮文本与回调?

`InquiryData

`
- 

`pauseGameActiveState

` - 是否在对话框打开期间暂停游戏活动状?- 

`prioritize

` - 是否将此对话框置于其他已有对话框之前

### ShowTextInquiry

`

`

`csharp
public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)
`

`

`

显示一个带文本输入框的询问对话框?
**参数:**
- 

`textData

` - 描述标题、正文、按钮文本、输入回调与输入校验?

`TextInquiryData

`
- 

`pauseGameActiveState

` - 是否在对话框打开期间暂停游戏活动状?- 

`prioritize

` - 是否将此对话框置于其他已有对话框之前

### HideInquiry

`

`

`csharp
public static void HideInquiry()
`

`

`

关闭当前显示的询问对话框。若 

`OnHideInquiry

` 事件未被订阅，调用将被忽略?
### ShowTooltip

`

`

`csharp
public static void ShowTooltip(Type type, params object[] args)
`

`

`

显示一个已注册类型的工具提示。`type

` 必须是先前通过 

`RegisterTooltip

` 注册过的类型，`args

` 会被传递给该工具提示的刷新回调?
**参数:**
- 

`type

` - 要显示工具提示的数据类型
- 

`args

` - 传递给工具提示刷新回调的参?
### HideTooltip

`

`

`csharp
public static void HideTooltip()
`

`

`

隐藏当前显示的工具提示。若 

`OnHideTooltip

` 事件未被订阅，调用将被忽略?
### AddSystemNotification

`

`

`csharp
public static void AddSystemNotification(string message)
`

`

`

添加一条系统通知?
**参数:**
- 

`message

` - 通知文本

### HideAllMessages

`

`

`csharp
public static void HideAllMessages()
`

`

`

隐藏所有当前显示的屏幕消息（不清理消息历史）。若 

`HideAllMessagesInternal

` 事件未被订阅，调用将被忽略?
### ClearAllMessages

`

`

`csharp
public static void ClearAllMessages()
`

`

`

清除所有屏幕消息。若 

`ClearAllMessagesInternal

` 事件未被订阅，调用将被忽略?
### IsAnyInquiryActive

`

`

`csharp
public static bool IsAnyInquiryActive()
`

`

`

**返回:** 若当前有询问对话框处于活动状态则?true，否则为 false。依赖内部委?

`IsAnyInquiryActiveInternal

`；未设置时返?false?
### GetIsAnyTooltipActive

`

`

`csharp
public static bool GetIsAnyTooltipActive()
`

`

`

**返回:** 若当前有任何工具提示处于活动状态则?true，否则为 false?
### GetIsAnyTooltipActiveAndExtended

`

`

`csharp
public static bool GetIsAnyTooltipActiveAndExtended()
`

`

`

**返回:** 若当前有工具提示处于活动且已展开（扩展）状态则?true，否则为 false?
### RegisterTooltip&lt;TRegistered, TTooltip&gt;

`

`

`csharp
public static void RegisterTooltip&lt;TRegistered, TTooltip&gt;(
    Action&lt;TTooltip, object[]&gt; onRefreshData,
    string movieName
) where TTooltip : TooltipBaseVM
`

`

`

为类?

`TRegistered

` 注册一个工具提示视图模?

`TTooltip

`，使其可?

`ShowTooltip

` 显示?
**参数:**
- 

`onRefreshData

` - 刷新工具提示数据的回调，接收视图模型实例?

`ShowTooltip

` 传入的参数数?- 

`movieName

` - 用于渲染工具提示?GFx 影片?
**类型约束:**
- 

`TTooltip

` 必须派生?

`TooltipBaseVM

`

### UnregisterTooltip&lt;TRegistered&gt;

`

`

`csharp
public static void UnregisterTooltip&lt;TRegistered&gt;()
`

`

`

移除先前?

`TRegistered

` 注册的工具提示。若该类型未注册，将在调试输出中打印一条提示?
### Clear

`

`

`csharp
public static void Clear()
`

`

`

将所有内部事件与委托置空（解除游?UI 的全部挂接）。通常仅由框架在场景切换时调用?
## 静态事件（框架钩子?
下列公共事件与委托由游戏 UI 层订阅以接收显示请求；Mod 作者通常应调用上文的公共方法，而非直接订阅这些事件。每个公共方法都是对相应钩子的转发，并在钩子为空时静默返回?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| DisplayMessageInternal \| event Action&lt;InformationMessage&gt; \| 

`DisplayMessage

` 的实际执行钩?\|
\| ClearAllMessagesInternal \| event Action \| 

`ClearAllMessages

` 的实际执行钩?\|
\| HideAllMessagesInternal \| event Action \| 

`HideAllMessages

` 的实际执行钩?\|
\| OnAddSystemNotification \| event Action&lt;string&gt; \| 

`AddSystemNotification

` 的实际执行钩?\|
\| OnShowTooltip \| event Action&lt;Type, object[]&gt; \| 

`ShowTooltip

` 的实际执行钩?\|
\| OnHideTooltip \| event Action \| 

`HideTooltip

` 的实际执行钩?\|
\| OnShowInquiry \| event Action&lt;InquiryData, bool, bool&gt; \| 

`ShowInquiry

` 的实际执行钩?\|
\| OnShowTextInquiry \| event Action&lt;TextInquiryData, bool, bool&gt; \| 

`ShowTextInquiry

` 的实际执行钩?\|
\| OnHideInquiry \| event Action \| 

`HideInquiry

` 的实际执行钩?\|
\| IsAnyInquiryActiveInternal \| Func&lt;bool&gt; \| 

`IsAnyInquiryActive

` 使用的查询委?\|
\| IsAnyTooltipActiveInternal \| IsAnyTooltipActiveDelegate \| 工具提示活动状态查询委?\|

## 嵌套类型

### TooltipRegistry

`

`

`csharp
public struct TooltipRegistry
{
    public Type TooltipType;
    public object OnRefreshData;
    public string MovieName;
}
`

`

`

`RegisterTooltip

` 注册时保存的条目，记录工具提示视图模型类型、刷新回调与影片名?
### IsAnyTooltipActiveDelegate

`

`

`csharp
public delegate void IsAnyTooltipActiveDelegate(
    out bool isAnyTooltipActive,
    out bool isAnyTooltipExtended
);
`

`

`

用于同时查询“是否有工具提示活动”与“是否已展开”的委托签名?
## 使用示例

`

`

`csharp
using TaleWorlds.Library;

// 1) 显示一条屏幕消?InformationManager.DisplayMessage(new InformationMessage("欢迎来到我的 Mod?));

// 带颜色的消息
InformationManager.DisplayMessage(
    new InformationMessage("任务完成?, Colors.Green));

// 2) 显示一个“是/否”询问对话框
var inquiry = new InquiryData(
    titleText: "确认",
    text: "是否立即前往目的地？",
    isAffirmativeOptionShown: true,
    isNegativeOptionShown: true,
    affirmativeText: "前往",
    negativeText: "稍后",
    affirmativeAction: () =&gt;
    {
        InformationManager.DisplayMessage(new InformationMessage("已出发?));
    },
    negativeAction: () =&gt;
    {
        InformationManager.DisplayMessage(new InformationMessage("已取消?));
    });

InformationManager.ShowInquiry(inquiry, pauseGameActiveState: true);
`

`

`

## 参见

- [MBCommon](./MBCommon)
- [MBList](./MBList)
