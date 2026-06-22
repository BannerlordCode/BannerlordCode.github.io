<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompatibilityReason`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompatibilityReason

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 枚举 enum enum
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CompatibilityReason` 是 `psai.Editor` 命名空间下的一个枚举 enum。
> 如需了解其属性、方法和开发者用例，请参考源码或贡献
## 枚举值

| Name |
|------|
| `not_set` |
| `target_theme_will_never_interrupt_source` |
| `manual_setting_within_same_hierarchy` |
| `manual_setting_of_parent_entity` |
| `inherited_from_parent_hierarchy` |
| `target_segment_and_source_segment_are_both_only_usable_at_end` |
| `target_segment_is_of_a_different_group_and_is_only_usable_at_end` |
| `target_segment_is_a_pure_bridge_segment_within_the_same_group` |
| `target_segment_is_a_manual_bridge_segment_for_the_source_group` |
| `target_segment_is_an_automatic_bridge_segment` |
| `target_group_contains_at_least_one_bridge_segment` |
| `anything_may_be_played_after_a_pure_end_segment` |
| `default_behavior_of_psai` |

文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)