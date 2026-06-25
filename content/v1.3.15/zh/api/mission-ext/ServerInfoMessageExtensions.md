---
title: "ServerInfoMessageExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServerInfoMessageExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServerInfoMessageExtensions

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade.Diamond
**类型:** static class

## 概述

`ServerInfoMessageExtensions

` 是多人大厅服务器消息的本地化扩展方法类。它提供一个扩展方?

`GetDescription

`，将 

`SystemMessage

` 枚举（`ServerInfoMessage

`）映射为对应的本地化 

`TextObject

`，并自动替换消息参数（`{ARG1}

`、`{ARG2}

` 等）?
本类是纯映射工具—?00+ ?

`case

` 分支覆盖了多人大厅的所有服务器消息（匹配、队伍、氏族、好友、自定义游戏、举报、外观等），每个分支返回一个带本地化键?

`TextObject

`?
## 心智模型

?

`ServerInfoMessageExtensions

` 理解?服务器消息到玩家可读文本的翻译表"。工作流?
1. 大厅服务器返?

`SystemMessage

`，其?

`Message

` 是枚举值，

`Parameters

` 是参数列表?2. 

`GetDescription

` 先将参数设置?

`GameTexts

` 变量（`ARG1

`、`ARG2

`?..）?3. 

`switch

` 匹配 

`message.Message

` 枚举值，返回对应?

`TextObject

`?4. 部分 case 有条件分支：?

`PlayerNotInLobby

` 检?

`Parameters[0]

` 是否为空字符串，决定显示"{ARG1} is not in lobby."还是"Player is not in lobby."?5. 未匹配的枚举值返?

`TextObject.GetEmpty()

`?
消息分类?- **匹配**: 

`FindGameBlockedFromMatchmaking

`、`FindGameNotPartyLeader

`、`FindGamePunished

`、`RejoinGame

` ?- **队伍**: 

`InvitePartySuccess

`、`KickPartyPlayerMustBeLeader

`、`PromotePartyLeaderSuccess

`、`DisbandPartySuccess

` ?- **氏族**: 

`ClanCreationNameIsInvalid

`、`InviteClanSuccess

`、`PromoteClanOfficerSuccess

` ?- **好友**: 

`AddFriendRequestSent

`、`AddFriendAlreadyFriends

`、`RemoveFriendSuccess

` ?- **自定义游?*: 

`PremadeGameCreationCanceled

`、`PremadeGameJoinIncorrectPassword

` ?- **举报**: 

`ReportPlayerSuccess

`、`ReportPlayerServerIsUnofficial

` ?- **外观**: 

`CustomizationNotEnoughLoot

`、`CustomizationItemAlreadyOwned

`、`CustomizationChangeSigilSuccess

` ?- **Bannerlord ID**: 

`ChangeBannerlordIDSuccess

`、`ChangeBannerlordIDProfanity

` ?- **战斗**: 

`BattleServerKickFriendlyFire

` ?
## 主要方法

### GetDescription
`

`

`csharp
public static TextObject GetDescription(this SystemMessage message)
`

`

`
扩展方法。将 

`SystemMessage

` 转换为本地化 

`TextObject

`?
**流程**?1. 遍历 

`message.Parameters

`，设?

`GameTexts

` 变量 

`ARG1

`、`ARG2

`?..?2. 

`switch (message.Message)

` 匹配 

`ServerInfoMessage

` 枚举值?3. 每个分支返回对应?

`new TextObject("{=key}...", null)

`?4. 部分分支检查参数是否为空字符串，返回不同的文本（有名字 vs 无名字）?5. 

`default

` 分支返回 

`TextObject.GetEmpty()

`?
## 使用示例

### 示例: 显示服务器消?
**场景**: 客户端收到服务器返回?

`SystemMessage

`，需要显示给玩家?
`

`

`csharp
// 服务器返回的消息
SystemMessage serverMessage = GetServerMessage();

// 获取本地化描?TextObject description = serverMessage.GetDescription();

// 显示?UI ?InformationManager.DisplayMessage(new InformationMessage(description.ToString()));
`

`

`

### 示例: 理解参数替换

**场景**: 服务器返?

`FindGamePunished

` 消息，参数为剩余秒数?
`

`

`csharp
// 服务器返回：Message = ServerInfoMessage.FindGamePunished, Parameters = ["120"]
// GetDescription 内部?//   GameTexts.SetVariable("ARG1", "120")
//   return new TextObject("{=ND2abg9k}You are blocked from matchmaking for {ARG1} seconds.")
// 结果文本?You are blocked from matchmaking for 120 seconds."

TextObject msg = serverMessage.GetDescription();
// msg.ToString() = "You are blocked from matchmaking for 120 seconds."
`

`

`

### 示例: 条件文本

**场景**: 服务器返?

`AddFriendRequestSent

`，参数可能为空或玩家名?
`

`

`csharp
// 有玩家名：Parameters = ["Player123"]
// ?"Friend request is sent to Player123."

// 无玩家名：Parameters = [""] ?Parameters = []
// ?"Friend request is sent."

// GetDescription 内部的条件判断：
// if (message.Parameters.Count &lt;= 0 \|\| message.Parameters[0] == string.Empty)
//     return new TextObject("{=yvT1gK1g}Friend request is sent.");
// else
//     return new TextObject("{=CyaniWe}Friend request is sent to {ARG1}.");
`

`

`

**要点**: 

`GetDescription

` 是唯一的公共方法，?

`SystemMessage

` 的扩展方法。参数通过 

`ARG1

`、`ARG2

`?.. 变量名替换到文本中。部分消息有有名?无名字两种文本变体。未识别的枚举值返回空 

`TextObject

`?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
