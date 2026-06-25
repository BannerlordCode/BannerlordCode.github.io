---
title: LogEntry
description: LogEntry - 游戏事件日志条目的抽象基?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LogEntry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LogEntry
**命名空间:** TaleWorlds.CampaignSystem.LogEntries
**模块:** TaleWorlds.CampaignSystem
**类型:** abstract class

## 概述
`LogEntry

` 是游戏事件日志的抽象基类，所有日志条目（如战斗结果、政治事件、领主互动等）都继承自此。每个条目有唯一 ID 和游戏时间戳，可被添加到 

`LogEntryHistory

` 中供玩家查看。基类还提供了一系列通知类型判断方法，根据事件涉及的阵营与玩家关系自动分类通知类型?
## 心智模型
日志条目通过 

`AddLogEntry

` 静态方法注册到 

`Campaign.Current.LogEntryHistory

`，自动分配递增 ID 并设置当?

`CampaignTime

`。`KeepInHistoryTime

` 默认?7 天，过期后从历史中移除。通知类型通过 

`MilitaryNotification

`、`DiplomaticNotification

` 等辅助方法计算，逻辑是：若受益方/受害方是玩家家族→玩家家族通知；若是玩家阵营→玩家阵营通知；若与玩家阵营交战→间接通知；否则为中立通知?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Id

` \| 

`long

` \| 唯一标识符（自动分配，只读） \|
\| 

`GameTime

` \| 

`CampaignTime

` \| 日志发生时的游戏时间（只读） \|
\| 

`KeepInHistoryTime

` \| 

`CampaignTime

` \| 在历史中保留的时长，默认 7 天（虚属性） \|
\| 

`NotificationType

` \| 

`ChatNotificationType

` \| 通知类型，默?

`Default

`（虚属性） \|

## 主要方法
### AddLogEntry
`

`

`csharp
public static void AddLogEntry(LogEntry logEntry)
public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)
`

`

`
将日志条目添加到历史记录。第一个重载使用当?

`CampaignTime.Now

`，第二个允许指定自定义时间。内部递增 

`LastAddedIndex

` 作为 ID?
### MilitaryNotification
`

`

`csharp
protected ChatNotificationType MilitaryNotification(IFaction benefiter, IFaction affected)
`

`

`
根据受益方和受影响方与玩家的关系，返回军事事件的通知类型。优先级：玩家家族正/负面 ?玩家阵营?负面 ?玩家阵营间接?负面 ?中立?
### DiplomaticNotification
`

`

`csharp
protected ChatNotificationType DiplomaticNotification(IFaction faction1, IFaction faction2)
`

`

`
外交事件通知类型。涉及玩家家族或阵营为正面，与玩家阵营交战为间接负面，否则为间接正面?
### PoliticalNotification
`

`

`csharp
protected ChatNotificationType PoliticalNotification(IFaction faction)
`

`

`
政治事件通知类型。玩家家??

`PlayerClanPolitical

`；玩家阵??

`PlayerFactionPolitical

`；其??

`Political

`?
### GetImportanceForClan
`

`

`csharp
public virtual ImportanceEnum GetImportanceForClan(Clan clan)
`

`

`
返回此日志对指定家族的重要程度，默认 

`Zero

`。子类可重写以提供更细致的重要性评估?
### GetAsRumor
`

`

`csharp
public virtual int GetAsRumor(Settlement settlement, out TextObject comment)
`

`

`
返回此日志作为传闻的价值（0 表示不可作为传闻），默认返回 0 和空文本?
### IsValid
`

`

`csharp
public virtual bool IsValid()
`

`

`
日志是否有效，默认返?true。子类可重写以在特定条件下标记为无效?
## 使用示例
### 示例: 创建自定义日志条?**场景**: mod 需要记录自定义事件到游戏日志中?

`

`

`csharp
public class MyCustomLogEntry : LogEntry
{
    [SaveableProperty(2)]
    public string EventDescription { get; set; }
    
    [SaveableProperty(3)]
    public Hero InvolvedHero { get; set; }
    
    public override ChatNotificationType NotificationType
    {
        get
        {
            if (InvolvedHero?.Clan != null)
            {
                return PoliticalNotification(InvolvedHero.Clan);
            }
            return ChatNotificationType.Neutral;
        }
    }
    
    public override ImportanceEnum GetImportanceForClan(Clan clan)
    {
        if (InvolvedHero?.Clan == clan)
            return ImportanceEnum.One;
        return ImportanceEnum.Zero;
    }
}

// 注册日志
var entry = new MyCustomLogEntry
{
    EventDescription = "发生了重要事?,
    InvolvedHero = Hero.MainHero
};
LogEntry.AddLogEntry(entry);
`

`

`
**要点**: 自定义日志类必须?

`[SaveableProperty]

` 标记需要持久化的属性；

`AddLogEntry

` 会自动设?

`GameTime

` ?

`Id

`，无需手动赋值；通知类型的选择影响消息?UI 中的显示颜色和图标?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
