<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PostfxConfig`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PostfxConfig

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public enum PostfxConfig : uint`
**Base:** `uint`
**领域:** engine

## 概述

`PostfxConfig` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `pfx_config_bloom` |
| `1U` |
| `pfx_config_sunshafts` |
| `pfx_config_motionblur` |
| `4U` |
| `pfx_config_dof` |
| `8U` |
| `pfx_config_tsao` |
| `16U` |
| `pfx_config_fxaa` |
| `64U` |
| `pfx_config_smaa` |
| `128U` |
| `pfx_config_temporal_smaa` |
| `256U` |
| `pfx_config_temporal_resolve` |
| `512U` |
| `pfx_config_temporal_filter` |
| `1024U` |
| `pfx_config_contour` |
| `2048U` |
| `pfx_config_ssr` |
| `4096U` |
| `pfx_config_sssss` |
| `8192U` |
| `pfx_config_streaks` |
| `16384U` |
| `pfx_config_lens_flares` |
| `32768U` |
| `pfx_config_chromatic_aberration` |

## 使用示例

```csharp
PostfxConfig example = PostfxConfig.pfx_config_bloom;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
