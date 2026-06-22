<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationDeploymentOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationDeploymentOrder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FormationDeploymentOrder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Key` | `public int Key { get; }` |
| `Offset` | `public int Offset { get; }` |


## 主要方法

### GetDeploymentOrder

```csharp
public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)
```

### GetComparer

```csharp
public static FormationDeploymentOrder.DeploymentOrderComparer GetComparer()
```

### Compare

```csharp
public int Compare(FormationDeploymentOrder a, FormationDeploymentOrder b)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)