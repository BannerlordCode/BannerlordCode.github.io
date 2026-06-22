<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DetachmentManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class DetachmentManager
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## 概述

`DetachmentManager` 拥有分遣队——特殊任务槽位，如攻城梯、塔楼、远程位置，可由队形填充。它创建/销毁分遣队（`MakeDetachment`/`DestroyDetachment`），跟踪队形加入/离开，并每 tick 推进。mod 查询 `Detachments` 或为新攻城器械创建自定义分遣队。

## 主要属性

| Name | Signature |
|------|-----------|
| `Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>> Detachments { get { return this._detachments; }` |

## 主要方法

### Clear
```csharp
public void Clear()
```

### ContainsDetachment
```csharp
public bool ContainsDetachment(IDetachment detachment)
```

### MakeDetachment
```csharp
public void MakeDetachment(IDetachment detachment)
```

### DestroyDetachment
```csharp
public void DestroyDetachment(IDetachment destroyedDetachment)
```

### OnFormationJoinDetachment
```csharp
public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)
```

### OnFormationLeaveDetachment
```csharp
public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)
```

### TickDetachments
```csharp
public void TickDetachments()
```

### TickAgent
```csharp
public void TickAgent(Agent agent)
```

### OnAgentRemoved
```csharp
public void OnAgentRemoved(Agent agent)
```

### RemoveScoresOfAgentFromDetachments
```csharp
public void RemoveScoresOfAgentFromDetachments(Agent agent)
```

### RemoveScoresOfAgentFromDetachment
```csharp
public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)
```

### AddAgentAsMovingToDetachment
```csharp
public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)
```

### RemoveAgentAsMovingToDetachment
```csharp
public void RemoveAgentAsMovingToDetachment(Agent agent)
```

### AddAgentAsDefendingToDetachment
```csharp
public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)
```

### RemoveAgentAsDefendingToDetachment
```csharp
public void RemoveAgentAsDefendingToDetachment(Agent agent)
```

### AssertDetachment
```csharp
public void AssertDetachment(Team team, IDetachment detachment)
```

## 使用示例

```csharp
// 列出所有分遣队及其填充情况
var dm = Mission.Current.GetMissionBehavior<DetachmentManager>();
foreach (var det in dm.Detachments)
{
    IDetachment d = det.Item1;
    int manned = d.AgentCount;
    InformationManager.DisplayMessage(new InformationMessage(
        $"分遣队 {d.GetType().Name}：{manned} 人在位"));
}
```

## 参见

- [完整类目录](../catalog)