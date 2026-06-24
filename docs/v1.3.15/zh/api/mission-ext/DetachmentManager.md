<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DetachmentManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class DetachmentManager
**Base:** ?**File:** 

`TaleWorlds.MountAndBlade/DetachmentManager.cs

`

## 概述

`DetachmentManager

` 拥有分遣队——特殊任务槽位，如攻城梯、塔楼、远程位置，可由队形填充。它创建/销毁分遣队（`MakeDetachment

`/

`DestroyDetachment

`），跟踪队形加入/离开，并?tick 推进。mod 查询 

`Detachments

` 或为新攻城器械创建自定义分遣队?
## 
## 心智模型

先把 `DetachmentManager` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| Name \| Signature \|
\|------\|-----------\|
\| 

`Detachments

` \| 

`public MBReadOnlyList&lt;ValueTuple&lt;IDetachment, DetachmentData&gt;&gt; Detachments { get { return this._detachments; }

` \|

## 主要方法

### Clear
`

`

`csharp
public void Clear()
`

`

`

### ContainsDetachment
`

`

`csharp
public bool ContainsDetachment(IDetachment detachment)
`

`

`

### MakeDetachment
`

`

`csharp
public void MakeDetachment(IDetachment detachment)
`

`

`

### DestroyDetachment
`

`

`csharp
public void DestroyDetachment(IDetachment destroyedDetachment)
`

`

`

### OnFormationJoinDetachment
`

`

`csharp
public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)
`

`

`

### OnFormationLeaveDetachment
`

`

`csharp
public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)
`

`

`

### TickDetachments
`

`

`csharp
public void TickDetachments()
`

`

`

### TickAgent
`

`

`csharp
public void TickAgent(Agent agent)
`

`

`

### OnAgentRemoved
`

`

`csharp
public void OnAgentRemoved(Agent agent)
`

`

`

### RemoveScoresOfAgentFromDetachments
`

`

`csharp
public void RemoveScoresOfAgentFromDetachments(Agent agent)
`

`

`

### RemoveScoresOfAgentFromDetachment
`

`

`csharp
public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)
`

`

`

### AddAgentAsMovingToDetachment
`

`

`csharp
public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)
`

`

`

### RemoveAgentAsMovingToDetachment
`

`

`csharp
public void RemoveAgentAsMovingToDetachment(Agent agent)
`

`

`

### AddAgentAsDefendingToDetachment
`

`

`csharp
public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)
`

`

`

### RemoveAgentAsDefendingToDetachment
`

`

`csharp
public void RemoveAgentAsDefendingToDetachment(Agent agent)
`

`

`

### AssertDetachment
`

`

`csharp
public void AssertDetachment(Team team, IDetachment detachment)
`

`

`

## 使用示例

`

`

`csharp
// 列出所有分遣队及其填充情况
var dm = Mission.Current.GetMissionBehavior&lt;DetachmentManager&gt;();
foreach (var det in dm.Detachments)
{
    IDetachment d = det.Item1;
    int manned = d.AgentCount;
    InformationManager.DisplayMessage(new InformationMessage(
        $"分遣?{d.GetType().Name}：{manned} 人在?));
}
`

`

`

## 参见

- [完整类目录](../catalog)